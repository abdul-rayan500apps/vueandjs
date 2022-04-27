import vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ApP from '@/components/App'
import InstancE from '@/components/vueinstance'
import VbinD from '@/components/vbind'
import VoncE from '@/components/vonce'
import VhtmL from '@/components/vhtml'
import EvenT from '@/components/event'
import ObjecT from '@/components/eventobject'
import ModifierS from '@/components/eventmodifiers'
import KeyModifiers from '@/components/keymodifiers'
import JsexpressioN from '@/components/jsexpression'
import TwoBinding from '@/components/twowaybinding'

vue.use(Router)
const routes = [
    { path: '/', name: "HelloWorld", component: HelloWorld },
    { path: '/1st', name: "ApP", component: ApP },
    { path: '/2nd', name: "InstancE", component: InstancE },
    { path: '/3rd', name: "VbinD", component: VbinD },
    { path: '/4th', name: "VoncE", component: VoncE },
    { path: '/5th', name: "VhtmL", component: VhtmL },
    { path: '/6th', name: "EvenT", component: EvenT },
    { path: '/7th', name: "ObjecT", component: ObjecT },
    { path: '/8th', name: "ModifierS", component: ModifierS },
    { path: '/9th', name: "KeyModifiers", component: KeyModifiers },
    { path: '/10th', name: "JsexpressioN", component: JsexpressioN },
    { path: '/11th', name: "TwoBinding", component: TwoBinding },

]

let router = new Router({ routes })

export default router