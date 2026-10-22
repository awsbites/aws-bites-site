const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const { test } = require('node:test')
const vm = require('node:vm')

const script = readFileSync(
  `${__dirname}/../src/_includes/episode-interactions.js`,
  'utf8',
)

// A small event-capable DOM fixture keeps these logic regressions browser-independent.
function fixture({
  transcript = true,
  hash = '',
  historyBlocked = false,
} = {}) {
  const elements = new Map()
  const listeners = new Map()
  const historyWrites = []
  const scripts = []
  let activeElement
  function element(id, panel) {
    const attrs = new Map()
    const handlers = new Map()
    const node = {
      id,
      hidden: false,
      tabIndex: 0,
      dataset: {},
      parentElement: { setAttribute() {} },
      setAttribute(key, value) {
        attrs.set(key, value)
      },
      getAttribute(key) {
        return attrs.get(key)
      },
      addEventListener(type, handler) {
        if (!handlers.has(type)) handlers.set(type, [])
        handlers.get(type).push(handler)
      },
      emit(type, values = {}) {
        const event = {
          button: 0,
          defaultPrevented: false,
          preventDefault() {
            this.defaultPrevented = true
          },
          ...values,
        }
        for (const handler of handlers.get(type) || []) handler(event)
        return event
      },
      focus() {
        activeElement = node
        node.emit('focus')
      },
      click() {
        return node.emit('click')
      },
      closest() {
        return panel || (id.endsWith('-content') ? node : null)
      },
      scrollIntoView() {
        node.scrolled = true
      },
    }
    elements.set(id, node)
    return node
  }
  const description = element('description-content')
  const panels = [description]
  const tabs = []
  const segments = []
  element('description', description)
  const heading = element('heading with spaces', description)
  element('episode-tabs')
  const help = element('transcript-keyboard-help')
  help.hidden = true
  if (transcript) {
    const transcriptPanel = element('transcript-content')
    panels.push(transcriptPanel)
    element('transcript', transcriptPanel)
    element('transcript-heading', transcriptPanel)
    for (const name of ['description', 'transcript']) {
      const tab = element(`${name}-tab`)
      tab.hash = `#${name}`
      tabs.push(tab)
    }
    for (let index = 0; index < 3; index++) {
      const segment = element(`segment-${index}`, transcriptPanel)
      segment.dataset.startTime = String(index * 10.5)
      segments.push(segment)
    }
  }
  const window = {
    location: { hash },
    history: {
      replaceState(_a, _b, value) {
        if (historyBlocked) throw new Error('History blocked')
        historyWrites.push(value)
      },
    },
    addEventListener(type, handler) {
      listeners.set(type, handler)
    },
  }
  const document = {
    querySelectorAll(selector) {
      return selector === '.tab-button'
        ? tabs
        : selector === '.tab-content'
          ? panels
          : segments
    },
    getElementById(id) {
      return elements.get(id) || null
    },
    createElement() {
      return {}
    },
    head: {
      append(node) {
        scripts.push(node)
      },
    },
  }
  vm.runInNewContext(script, { window, document })
  return {
    elements,
    heading,
    window,
    panels,
    tabs,
    segments,
    help,
    scripts,
    historyWrites,
    active: () => activeElement,
    navigate(value) {
      window.location.hash = value
      listeners.get('hashchange')?.()
    },
    ready(seekTo) {
      window.YT = {
        Player: function (_id, options) {
          options.events.onReady({ target: { seekTo } })
        },
      }
      window.onYouTubeIframeAPIReady()
    },
  }
}

test('episodes without transcripts initialize without tabs or the player API', () => {
  const page = fixture({ transcript: false })
  assert.equal(page.panels[0].hidden, false)
  assert.equal(page.scripts.length, 0)
  assert.deepEqual(page.historyWrites, [])
})

test('tabs expose selected state, panel relationships and one tab stop', () => {
  const page = fixture()
  assert.equal(page.tabs[0].getAttribute('aria-selected'), 'true')
  assert.equal(
    page.tabs[0].getAttribute('aria-controls'),
    'description-content',
  )
  assert.equal(page.panels[1].getAttribute('aria-labelledby'), 'transcript-tab')
  assert.equal(page.panels[1].hidden, true)
  page.tabs[1].click()
  assert.equal(page.panels[0].hidden, true)
  assert.equal(page.panels[1].hidden, false)
  assert.deepEqual(
    page.tabs.map((tab) => tab.tabIndex),
    [-1, 0],
  )
  assert.deepEqual(page.historyWrites, ['#transcript'])
})

test('arrow, Home and End keys move focus and select tabs', () => {
  const page = fixture()
  page.tabs[0].emit('keydown', { key: 'ArrowLeft' })
  assert.equal(page.active(), page.tabs[1])
  assert.equal(page.panels[1].hidden, false)
  page.tabs[1].emit('keydown', { key: 'Home' })
  assert.equal(page.active(), page.tabs[0])
  page.tabs[0].emit('keydown', { key: 'End' })
  assert.equal(page.active(), page.tabs[1])
  assert.equal(
    page.tabs[1].emit('keydown', { key: ' ' }).defaultPrevented,
    true,
  )
})

test('encoded section fragments survive initialization and reveal their panel', () => {
  const page = fixture({ hash: '#heading%20with%20spaces' })
  assert.deepEqual(page.historyWrites, [])
  assert.equal(page.heading.scrolled, true)
  page.navigate('#transcript-heading')
  assert.equal(page.panels[1].hidden, false)
  assert.equal(page.elements.get('transcript-heading').scrolled, true)
  assert.deepEqual(page.historyWrites, [])
  page.navigate('')
  assert.equal(page.panels[0].hidden, false)
})

test('panel IDs, unknown fragments and malformed encodings never rewrite the URL', () => {
  for (const hash of [
    '#transcript',
    '#transcript-content',
    '#missing',
    '#%E0%A4',
  ]) {
    const page = fixture({ hash })
    assert.deepEqual(page.historyWrites, [])
    if (hash.startsWith('#transcript'))
      assert.equal(page.panels[1].hidden, false)
  }
})

test('tab state still changes when history access is denied', () => {
  const page = fixture({ historyBlocked: true })
  assert.doesNotThrow(() => page.tabs[1].click())
  assert.equal(page.panels[1].hidden, false)
})

test('modified tab clicks keep native link behavior', () => {
  const page = fixture()
  assert.equal(
    page.tabs[1].emit('click', { ctrlKey: true }).defaultPrevented,
    false,
  )
  assert.equal(page.panels[0].hidden, false)
})

test('transcript navigation keeps one tab stop and leaves Tab available to exit', () => {
  const page = fixture()
  assert.equal(page.help.hidden, false)
  assert.deepEqual(
    page.segments.map((segment) => segment.tabIndex),
    [0, -1, -1],
  )
  page.segments[0].emit('keydown', { key: 'ArrowRight' })
  assert.equal(page.active(), page.segments[1])
  assert.deepEqual(
    page.segments.map((segment) => segment.tabIndex),
    [-1, 0, -1],
  )
  page.segments[1].emit('keydown', { key: 'End' })
  assert.equal(page.active(), page.segments[2])
  page.segments[2].emit('keydown', { key: 'Home' })
  assert.equal(page.active(), page.segments[0])
  assert.equal(
    page.segments[0].emit('keydown', { key: 'Tab' }).defaultPrevented,
    false,
  )
})

test('links remain native before player readiness and seek once ready', () => {
  const page = fixture()
  assert.equal(page.segments[1].click().defaultPrevented, false)
  let sought
  page.ready((time, allowSeekAhead) => {
    sought = [time, allowSeekAhead]
  })
  assert.equal(page.segments[1].click().defaultPrevented, true)
  assert.deepEqual(sought, [10.5, true])
  assert.equal(
    page.segments[1].emit('click', { metaKey: true }).defaultPrevented,
    false,
  )
})

test('player failure and invalid timestamps preserve native link fallback', () => {
  const page = fixture()
  page.ready(() => {
    throw new Error('Player unavailable')
  })
  assert.equal(page.segments[0].click().defaultPrevented, false)
  page.segments[0].dataset.startTime = 'invalid'
  assert.equal(page.segments[0].click().defaultPrevented, false)
})
