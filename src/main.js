import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from "./store"
import BootstrapVue from "bootstrap-vue"
import VueMoment from "vue-moment"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

Vue.use(VueMoment)
Vue.use(BootstrapVue)


new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')