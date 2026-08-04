<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const cv = ref(null)
let raf = 0
let ctx = null
let W = 0, H = 0, dpr = 1
let particles = []
let route = []
let t = 0

function resize() {
  if (!cv.value) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  W = cv.value.clientWidth
  H = cv.value.clientHeight
  cv.value.width = W * dpr
  cv.value.height = H * dpr
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  initScene()
}

function initScene() {
  // 漂浮粒子
  const n = Math.max(18, Math.min(46, Math.floor(W / 26)))
  particles = new Array(n).fill(0).map(() => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: 0.6 + Math.random() * 2.2,
    vx: (Math.random() - 0.5) * 0.18,
    vy: -0.05 - Math.random() * 0.22,
    a: 0.15 + Math.random() * 0.5
  }))
  // 一条流动航线（贝塞尔近似点列）
  route = []
  const p0 = { x: W * 0.12, y: H * 0.82 }
  const p1 = { x: W * 0.42, y: H * 0.30 }
  const p2 = { x: W * 0.70, y: H * 0.62 }
  const p3 = { x: W * 0.90, y: H * 0.20 }
  const steps = 60
  for (let i = 0; i <= steps; i++) {
    const s = i / steps
    const u = 1 - s
    route.push({
      x: u*u*u*p0.x + 3*u*u*s*p1.x + 3*u*s*s*p2.x + s*s*s*p3.x,
      y: u*u*u*p0.y + 3*u*u*s*p1.y + 3*u*s*s*p2.y + s*s*s*p3.y
    })
  }
}

function draw() {
  if (!ctx) return
  ctx.clearRect(0, 0, W, H)
  const isDark = document.documentElement.classList.contains('dark')
  const pc = isDark ? '56,189,248' : '14,165,233'

  // 漂浮粒子
  for (const p of particles) {
    p.x += p.vx; p.y += p.vy
    if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W }
    if (p.x < -10) p.x = W + 10
    if (p.x > W + 10) p.x = -10
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${pc},${p.a})`
    ctx.fill()
  }

  // 流动航线：虚线 + 移动光点
  ctx.save()
  ctx.setLineDash([5, 9])
  ctx.lineWidth = 1.6
  ctx.strokeStyle = `rgba(${pc},0.35)`
  ctx.beginPath()
  route.forEach((pt, i) => i ? ctx.lineTo(pt.x, pt.y) : ctx.moveTo(pt.x, pt.y))
  ctx.stroke()
  ctx.setLineDash([])
  // 移动光点（沿航线缓行）
  const idx = Math.floor((t % 240) / 240 * route.length)
  const pt = route[idx]
  const grd = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 9)
  grd.addColorStop(0, `rgba(${pc},0.9)`)
  grd.addColorStop(1, `rgba(${pc},0)`)
  ctx.fillStyle = grd
  ctx.beginPath(); ctx.arc(pt.x, pt.y, 9, 0, Math.PI * 2); ctx.fill()
  ctx.restore()

  t += 1
  raf = requestAnimationFrame(draw)
}

onMounted(() => {
  if (!cv.value) return
  ctx = cv.value.getContext('2d')
  resize()
  window.addEventListener('resize', resize)
  raf = requestAnimationFrame(draw)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  if (typeof window !== 'undefined') window.removeEventListener('resize', resize)
})
</script>

<template>
  <div class="hb-fx" aria-hidden="true">
    <!-- 多层海浪 -->
    <svg class="hb-wave hb-wave-1" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path d="M0 60 C 240 110 480 10 720 60 C 960 110 1200 10 1440 60 L1440 120 L0 120 Z"/>
    </svg>
    <svg class="hb-wave hb-wave-2" viewBox="0 0 1440 120" preserveAspectRatio="none">
      <path d="M0 70 C 260 20 520 120 760 70 C 1000 20 1240 120 1440 70 L1440 120 L0 120 Z"/>
    </svg>
    <canvas ref="cv" class="hb-fx-canvas"></canvas>
  </div>
</template>
