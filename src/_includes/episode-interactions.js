;(() => {
  const tabs = [...document.querySelectorAll('.tab-button')]
  const panels = [...document.querySelectorAll('.tab-content')]
  const segments = [...document.querySelectorAll('.transcript-segment')]
  const episodePage = document.getElementById('main-content')
  const playerSentinel = document.getElementById('episode-player-sentinel')
  let playerAboveViewport = false

  function updateCinemaMode() {
    episodePage?.setAttribute(
      'data-player-stuck',
      String(
        playerAboveViewport &&
          episodePage.getAttribute('data-transcript-active') === 'true',
      ),
    )
  }

  if (playerSentinel && tabs.length) {
    const measurePlayer = () => {
      playerAboveViewport = playerSentinel.getBoundingClientRect().bottom <= 0
      updateCinemaMode()
    }
    measurePlayer()
    if (window.IntersectionObserver) {
      const observer = new window.IntersectionObserver((entries) => {
        playerAboveViewport = entries[0].boundingClientRect.bottom <= 0
        updateCinemaMode()
      })
      observer.observe(playerSentinel)
    } else {
      let scheduled = false
      window.addEventListener(
        'scroll',
        () => {
          if (scheduled) return
          scheduled = true
          window.requestAnimationFrame(() => {
            scheduled = false
            measurePlayer()
          })
        },
        { passive: true },
      )
    }
  }

  function selectTab(tab) {
    episodePage?.setAttribute(
      'data-transcript-active',
      String(tab.id === 'transcript-tab'),
    )
    updateCinemaMode()
    tabs.forEach((item) => {
      const selected = item === tab
      item.setAttribute('aria-selected', String(selected))
      item.tabIndex = selected ? 0 : -1
      document.getElementById(item.getAttribute('aria-controls')).hidden =
        !selected
    })
  }

  function syncFragment() {
    let fragment
    try {
      fragment = decodeURIComponent(window.location.hash.slice(1))
    } catch {
      return
    }
    const target = document.getElementById(fragment)
    const panel = target?.closest('.tab-content')
    const tab = tabs.find(
      (item) =>
        item.hash === `#${fragment}` ||
        item.getAttribute('aria-controls') === panel?.id,
    )
    if (tab) {
      selectTab(tab)
      // A hidden panel must be revealed before its nested anchor can scroll.
      if (
        target &&
        panel &&
        target.id !== 'description' &&
        target.id !== 'transcript'
      )
        target.scrollIntoView()
    } else if (!fragment && tabs.length) {
      selectTab(tabs[0])
    }
  }

  if (tabs.length && panels.length) {
    document.getElementById('episode-tabs').setAttribute('role', 'tablist')
    tabs.forEach((tab, index) => {
      tab.parentElement.setAttribute('role', 'presentation')
      tab.setAttribute('role', 'tab')
      tab.setAttribute('aria-controls', panels[index].id)
      panels[index].setAttribute('role', 'tabpanel')
      panels[index].setAttribute('aria-labelledby', tab.id)
      panels[index].tabIndex = 0
      tab.addEventListener('click', (event) => {
        // Preserve modified clicks and the normal link destination.
        if (
          event.ctrlKey ||
          event.metaKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        )
          return
        event.preventDefault()
        selectTab(tab)
        // Preserve the query string and avoid adding history entries for tabs.
        try {
          window.history.replaceState(null, '', tab.hash)
        } catch {
          /* Panels still work without history access. */
        }
      })
      tab.addEventListener('keydown', (event) => {
        if (event.key === ' ') {
          event.preventDefault()
          tab.click()
          return
        }
        const next =
          event.key === 'ArrowRight'
            ? (index + 1) % tabs.length
            : event.key === 'ArrowLeft'
              ? (index + tabs.length - 1) % tabs.length
              : event.key === 'Home'
                ? 0
                : event.key === 'End'
                  ? tabs.length - 1
                  : -1
        if (next < 0) return
        event.preventDefault()
        tabs[next].focus()
        tabs[next].click()
      })
    })
    selectTab(tabs[0])
    syncFragment()
    window.addEventListener('hashchange', syncFragment)
  }

  // One transcript tab stop, with arrow-key access to every segment.
  if (segments.length) {
    const help = document.getElementById('transcript-keyboard-help')
    help.hidden = false
    segments.forEach((segment, index) => {
      segment.tabIndex = index === 0 ? 0 : -1
      segment.setAttribute('aria-describedby', help.id)
      segment.addEventListener('focus', () => {
        segments.forEach((item) => {
          item.tabIndex = item === segment ? 0 : -1
        })
      })
      segment.addEventListener('keydown', (event) => {
        const next =
          event.key === 'ArrowRight' || event.key === 'ArrowDown'
            ? Math.min(index + 1, segments.length - 1)
            : event.key === 'ArrowLeft' || event.key === 'ArrowUp'
              ? Math.max(index - 1, 0)
              : event.key === 'Home'
                ? 0
                : event.key === 'End'
                  ? segments.length - 1
                  : -1
        if (
          next < 0 ||
          event.ctrlKey ||
          event.metaKey ||
          event.altKey ||
          event.shiftKey
        )
          return
        event.preventDefault()
        segments[next].focus()
      })
    })

    // Links work on YouTube even if its embedded API is blocked or unavailable.
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtubePlayer', {
        events: {
          onReady(event) {
            segments.forEach((segment) => {
              segment.addEventListener('click', (click) => {
                if (
                  click.ctrlKey ||
                  click.metaKey ||
                  click.shiftKey ||
                  click.altKey ||
                  click.button !== 0
                )
                  return
                const start = Number(segment.dataset.startTime)
                if (!Number.isFinite(start) || start < 0) return
                try {
                  event.target.seekTo(start, true)
                  click.preventDefault()
                } catch {
                  /* Keep the native YouTube link as the fallback. */
                }
              })
            })
          },
        },
      })
    }
    if (window.YT?.Player) window.onYouTubeIframeAPIReady()
    else {
      const script = document.createElement('script')
      script.src = 'https://www.youtube.com/iframe_api'
      script.async = true
      document.head.append(script)
    }
  }
})()
