import VueBoolean from './components/boolean.vue'
import { App } from 'vue'

export default function install(app: App) {
    app.component('VueBoolean', VueBoolean)
}
