import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import { createApp } from 'vue'
import store from '@/store/index'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBriefcase, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import AosVue from "aos-vue";
import LoadScript from "vue-plugin-load-script";
import VueEllipseProgress from 'vue-ellipse-progress';

library.add(faWhatsapp, faEnvelope, faTelegram, faVk, faBriefcase, faAddressCard)

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.use(AosVue)
	.use(store)
	.use(LoadScript)
	.use(VueEllipseProgress)
	.mount('#app')