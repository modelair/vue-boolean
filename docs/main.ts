import { createApp } from 'vue'
import DocsIndex from './docs-index.vue'
import components from '../src'


const app = createApp(DocsIndex)

// app.use(components)

app.mount('#vite')
