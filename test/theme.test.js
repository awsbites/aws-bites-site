const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const { test } = require('node:test')
const vm = require('node:vm')

const source = readFileSync(`${__dirname}/../src/_includes/theme.js`, 'utf8')

function fixture({ stored = null, dark = false, blocked = false } = {}) {
  const ready = []
  const events = new Map()
  const writes = []
  function element() {
    const classes = new Set(['hidden'])
    const attributes = new Map()
    const handlers = new Map()
    return {
      style: {},
      attributes,
      handlers,
      setAttribute(key, value) {
        attributes.set(key, value)
      },
      addEventListener(key, handler) {
        handlers.set(key, handler)
      },
      classList: {
        contains(key) {
          return classes.has(key)
        },
        remove(key) {
          classes.delete(key)
        },
        toggle(key, enabled) {
          if (enabled) classes.add(key)
          else classes.delete(key)
        },
      },
    }
  }
  const root = element()
  const button = element()
  const icons = {
    'toggle-light-icon': element(),
    'toggle-dark-icon': element(),
  }
  let mounted = false
  const system = {
    matches: dark,
    addEventListener(key, handler) {
      events.set(`system:${key}`, handler)
    },
  }
  const window = {
    matchMedia() {
      return system
    },
    localStorage: {
      getItem() {
        if (blocked) throw new Error('Storage denied')
        return stored
      },
      setItem(key, value) {
        if (blocked) throw new Error('Storage denied')
        writes.push([key, value])
      },
    },
    addEventListener(key, handler) {
      events.set(key, handler)
    },
  }
  const document = {
    documentElement: root,
    getElementById(id) {
      return mounted ? (id === 'toggle-theme' ? button : icons[id]) : null
    },
    addEventListener(key, handler) {
      if (key === 'DOMContentLoaded') ready.push(handler)
    },
  }
  vm.runInNewContext(source, { document, window })
  return {
    root,
    button,
    writes,
    mount() {
      mounted = true
      for (const handler of ready) handler()
    },
    click() {
      button.handlers.get('click')()
    },
    changeSystem(value) {
      system.matches = value
      events.get('system:change')()
    },
    changeStorage(value) {
      events.get('storage')({ key: 'theme', newValue: value })
    },
  }
}

test('system theme is resolved before controls mount without persisting it', () => {
  const page = fixture({ dark: true })
  assert.equal(page.root.classList.contains('dark'), true)
  assert.equal(page.root.style.colorScheme, 'dark')
  page.mount()
  assert.equal(page.button.attributes.get('aria-pressed'), 'true')
  assert.equal(page.button.classList.contains('hidden'), false)
  assert.deepEqual(page.writes, [])
  page.changeSystem(false)
  assert.equal(page.button.attributes.get('aria-pressed'), 'false')
})

test('an explicit choice overrides system changes and is announced', () => {
  const page = fixture({ stored: 'light', dark: true })
  page.mount()
  assert.equal(page.root.classList.contains('dark'), false)
  page.click()
  assert.equal(page.button.attributes.get('aria-pressed'), 'true')
  assert.deepEqual(page.writes, [['theme', 'dark']])
  page.changeSystem(false)
  assert.equal(page.root.classList.contains('dark'), true)
})

test('denied storage does not prevent theme initialization or switching', () => {
  const page = fixture({ blocked: true, dark: true })
  page.mount()
  assert.doesNotThrow(() => page.click())
  assert.equal(page.root.classList.contains('dark'), false)
  assert.equal(page.button.attributes.get('aria-pressed'), 'false')
})

test('other tabs synchronize explicit preferences and removal restores system behavior', () => {
  const page = fixture({ dark: false })
  page.mount()
  page.changeStorage('dark')
  assert.equal(page.root.classList.contains('dark'), true)
  page.changeStorage(null)
  assert.equal(page.root.classList.contains('dark'), false)
  page.changeSystem(true)
  assert.equal(page.root.classList.contains('dark'), true)
})
