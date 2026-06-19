import { reactive, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const pos = reactive({ x: 0.5, y: 0.5, rawX: 0, rawY: 0 })

  function onMove(e) {
    pos.rawX = e.clientX
    pos.rawY = e.clientY
    pos.x = e.clientX / window.innerWidth
    pos.y = e.clientY / window.innerHeight
  }

  onMounted(() => window.addEventListener('mousemove', onMove, { passive: true }))
  onUnmounted(() => window.removeEventListener('mousemove', onMove))

  return pos
}
