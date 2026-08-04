import DefaultTheme from 'vitepress/theme'
import './style.css'
import RouteMap from './components/RouteMap.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('RouteMap', RouteMap)
  }
}
