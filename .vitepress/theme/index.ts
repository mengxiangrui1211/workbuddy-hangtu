import DefaultTheme from 'vitepress/theme'
import { h, defineComponent, onMounted, nextTick } from 'vue'
import { useRouter } from 'vitepress'
import './style.css'
import RouteMap from './components/RouteMap.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import CaseWall from './components/CaseWall.vue'

let revealObserver = null
const REVEAL_SELECTOR = '.hb-home-glow > *'

// 首页区块入场动效：进入视口淡入上浮，首屏按 DOM 顺序 stagger
function initReveal() {
  document.documentElement.classList.add('hb-reveal-ready')
  const blocks = Array.from(document.querySelectorAll(REVEAL_SELECTOR))
  if (revealObserver) revealObserver.disconnect()
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in')
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' })
  blocks.forEach((el, i) => {
    el.classList.add('hb-reveal')
    el.style.transitionDelay = (i * 70) + 'ms'
    revealObserver.observe(el)
  })
}

export default {
  extends: DefaultTheme,
  Layout: defineComponent({
    setup() {
      const router = useRouter()
      onMounted(() => nextTick(initReveal))
      // 客户端路由切换（SPA 回到首页）时重新初始化
      router.onAfterRouteChanged = () => nextTick(initReveal)
      return () => h(DefaultTheme.Layout, null, {
        'layout-top': () => h(ReadingProgress)
      })
    }
  }),
  enhanceApp({ app }) {
    app.component('RouteMap', RouteMap)
    app.component('CaseWall', CaseWall)
  }
}
