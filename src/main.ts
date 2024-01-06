import { createApp } from 'vue'
import  { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'

const strings = {
    en: {
        feature: {
            info : 'information about trainers, campuses, and services',
            booking : 'booking for workout',
            purchase : 'purchase subscriptions',
        },
        title : {
            first : 'it\'s time',
            second: 'to engage in sports',
        },
        button : {
            download : 'Download Android app',
            useWeb : 'Use web version',
        }
    },
    ru: {
        feature: {
            info : 'информация о тренерах, корпусах и услугах',
            booking : 'запись на занятия',
            purchase : 'покупка абонементов',
        },
        title : {
            first : 'самое время',
            second: 'заняться спортом',
        },
        button : {
            download : 'Скачать Android-приложение',
            useWeb : 'Использовать веб-версию',
        }
    }
}

const i18n = createI18n({

    locale:  navigator.language,
    fallbackLocale: "en",
    messages: strings

})

const app = createApp(App)

app.use(i18n)

app.mount('#app')