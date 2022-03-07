import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import components from '@/components'
import UIComponents from '@/components/UI'
import directives from '@/directives';
import { loadFonts } from './plugins/webfontloader'
import '@/css/reset.css'

loadFonts()

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})
UIComponents.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {
    app.directive(directive.name, directive);
})

app
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
