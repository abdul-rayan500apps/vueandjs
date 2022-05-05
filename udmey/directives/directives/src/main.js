import Vue from 'vue'
import App from './App.vue'

Vue.directive("Size", {
    bind(el, binding) {
        if (binding.value == "small") {
            el.style.fontSize = "20Px"
        } else if (binding.value == "big") {
            el.style.fontSize == "100Px"
        } else {
            el.style.fontSize = "60Px"
        }
    }
})
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')