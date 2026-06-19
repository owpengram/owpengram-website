const chars = '!<>-_\\/[]{}—=+*^?#________'

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)]
}

export default {
  mounted(el) {
    const original = el.textContent
    let frameId = null
    let timeoutId = null

    function scramble() {
      let iterations = 0
      const maxIterations = 8

      function tick() {
        let output = ''
        for (let i = 0; i < original.length; i++) {
          if (i < iterations) {
            output += original[i]
          } else {
            output += randomChar()
          }
        }
        el.textContent = output
        iterations += 1 / 3

        if (iterations < maxIterations) {
          frameId = requestAnimationFrame(tick)
        } else {
          el.textContent = original
        }
      }

      tick()
    }

    function onEnter() {
      cancelAnimationFrame(frameId)
      clearTimeout(timeoutId)
      scramble()
    }

    function onLeave() {
      cancelAnimationFrame(frameId)
      el.textContent = original
    }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el._scrambleCleanup = () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  },
  unmounted(el) {
    if (el._scrambleCleanup) el._scrambleCleanup()
  },
}
