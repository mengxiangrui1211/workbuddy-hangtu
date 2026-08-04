import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ChapterMeta from './components/ChapterMeta.vue'
import ChapterReview from './components/ChapterReview.vue'
import RouteMap from './components/RouteMap.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ChapterMeta', ChapterMeta)
    app.component('ChapterReview', ChapterReview)
    app.component('RouteMap', RouteMap)
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-top': () => h(ChapterMeta),
      'doc-bottom': () => h(ChapterReview)
    })
  }
}
