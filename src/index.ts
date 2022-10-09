import VueBoolean from './components/boolean.vue'
import { App } from 'vue'

function install(app: App) {
    app.component('VueBoolean', VueBoolean)
}

export default { install }
export * from './components/'
