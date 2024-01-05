import { createApp } from 'vue'
import  { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ru: {
        message: {
            hello: 'привет мир'
        }
    }
}



const i18n = createI18n({

    locale: "en",
    fallbackLocale: "en",
    messages

})

const app = createApp(App)

app.use(i18n)

app.mount('#app')