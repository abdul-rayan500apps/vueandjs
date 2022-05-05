import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
    // Vue.filter("Lcase", function(val) {
    //   return val.toLowerCase(); THIS IS THE FIRST METHOD FOR FILTERS CONCEPT
Vue.filter("Lcase", function(val) {
    return val.toLowerCase();
})
Vue.filter("currencyconverter", function(val) {
        return val * 75
    }),

    new Vue({
        render: h => h(App),
    }).$mount('#app')