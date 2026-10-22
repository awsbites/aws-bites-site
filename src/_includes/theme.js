;(() => {
  const root = document.documentElement
  const system = window.matchMedia('(prefers-color-scheme: dark)')
  let preference
  try {
    preference = window.localStorage.getItem('theme')
  } catch {
    /* Use the system preference when storage is unavailable. */
  }
  if (preference !== 'dark' && preference !== 'light') preference = null

  function applyTheme() {
    const dark = preference ? preference === 'dark' : system.matches
    root.classList.toggle('dark', dark)
    root.style.colorScheme = dark ? 'dark' : 'light'
    const button = document.getElementById('toggle-theme')
    if (!button) return
    button.classList.remove('hidden')
    button.setAttribute('aria-pressed', String(dark))
  }

  // Resolve the theme before styles paint; do not store an implicit system choice.
  applyTheme()
  root.classList.remove('no-js')
  let initializedButton
  function initializeControl() {
    const button = document.getElementById('toggle-theme')
    if (!button || button === initializedButton) return
    initializedButton = button
    applyTheme()
    button.addEventListener('click', () => {
      preference = root.classList.contains('dark') ? 'light' : 'dark'
      applyTheme()
      try {
        window.localStorage.setItem('theme', preference)
      } catch {
        /* The theme still works for this visit. */
      }
    })
  }
  // The header signals readiness before later scripts can delay DOMContentLoaded.
  document.addEventListener('awsbites:theme-ready', initializeControl)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeControl, {
      once: true,
    })
  } else {
    initializeControl()
  }
  system.addEventListener('change', () => {
    if (!preference) applyTheme()
  })
  window.addEventListener('storage', (event) => {
    if (event.key !== 'theme' && event.key !== null) return
    preference =
      event.newValue === 'dark' || event.newValue === 'light'
        ? event.newValue
        : null
    applyTheme()
  })
})()
