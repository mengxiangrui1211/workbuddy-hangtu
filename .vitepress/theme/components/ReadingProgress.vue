<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useData, useRoute } from 'vitepress'

const progress = ref(0)
const { page, frontmatter } = useData()
const route = useRoute()

function update() {
  const doc = document.documentElement
  const scrollTop = doc.scrollTop || document.body.scrollTop
  const height = doc.scrollHeight - doc.clientHeight
  progress.value = height > 0 ? Math.min(100, (scrollTop / height) * 100) : 0
}

// 仅在文档页（含首页长文）显示；纯 layout 页（如 404）也显示无妨
const visible = ref(true)
watch(
  () => frontmatter.value.layout,
  (layout) => {
    visible.value = layout !== 'home' ? true : true // 首页也允许，长滚动有用
  },
  { immediate: true }
)

onMounted(() => {
  window.addEventListener('scroll', update, { passive: true })
  window.addEventListener('resize', update)
  update()
})
onUnmounted(() => {
  window.removeEventListener('scroll', update)
  window.removeEventListener('resize', update)
})

// 路由切换后滚动归零，下一帧重新计算
watch(
  () => route.path,
  () => {
    nextTick(() => {
      progress.value = 0
      update()
    })
  }
)
</script>

<template>
  <div
    v-show="visible"
    class="hb-reading-progress"
    :style="{ width: progress + '%' }"
    :aria-hidden="true"
  />
</template>

<style>
.hb-reading-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--vp-c-brand-1), var(--hb-accent));
  box-shadow: 0 0 8px rgba(14, 165, 233, 0.6);
  z-index: 1001; /* 盖在 nav 之上 */
  transition: width 0.12s ease-out;
  pointer-events: none;
}
</style>
