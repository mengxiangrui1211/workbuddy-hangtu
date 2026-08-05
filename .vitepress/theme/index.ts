import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './style.css'

import RouteMap from './components/RouteMap.vue'
import ReadingProgress from './components/ReadingProgress.vue'
import CaseWall from './components/CaseWall.vue'
import HomePage from './components/HomePage.vue'
import MermaidDiagram from './components/MermaidDiagram.vue'
import ImageLightbox from './components/ImageLightbox.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ReadingProgress),
      'layout-bottom': () => h(ImageLightbox)
    })
  },
  enhanceApp({ app }) {
    app.component('HomePage', HomePage)
    app.component('MermaidDiagram', MermaidDiagram)
    app.component('RouteMap', RouteMap)
    app.component('CaseWall', CaseWall)
  }
}
