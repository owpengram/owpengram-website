export default {
  mounted(el) {
    el.style.position = 'relative'
    el.style.overflow = 'hidden'

    function onClick(e) {
      const rect = el.getBoundingClientRect()
      const r = Math.max(rect.width, rect.height) * 0.6
      const x = e.clientX - rect.left - r / 2
      const y = e.clientY - rect.top - r / 2

      const ripple = document.createElement('span')
      ripple.className = 'v-ripple'
      ripple.style.cssText = `
        position:absolute;left:${x}px;top:${y}px;width:${r}px;height:${r}px;
        border-radius:50%;background:rgba(255,255,255,0.25);
        transform:scale(0);animation:v-ripple-fade 0.5s ease-out forwards;
        pointer-events:none;
      `
      el.appendChild(ripple)
      ripple.addEventListener('animationend', () => ripple.remove())
    }

    el.addEventListener('click', onClick)
    el._rippleCleanup = () => el.removeEventListener('click', onClick)
  },
  unmounted(el) {
    if (el._rippleCleanup) el._rippleCleanup()
  },
}
