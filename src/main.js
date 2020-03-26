import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vGallery from 'v-gallery'
Vue.use(vGallery)

//import noImagePath from './assets/image-non-disponible.png'


Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')