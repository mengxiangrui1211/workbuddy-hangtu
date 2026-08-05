import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'
import RouteMap from './components/RouteMap.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import CaseWall from './components/CaseWall.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ReadingProgress)
    })
  },
  enhanceApp({ app }) {
    app.component('RouteMap', RouteMap)
    app.component('CaseWall', CaseWall)
  }
}
