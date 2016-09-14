import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// import AppVue from './App.vue'
import routerMap from './routers'

Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter({
	hashbang: true,
	history: false,
	saveScrollPosition:true,
	transitionOnLoad: true
});
// router.map({
// 	'/':{
// 		component:AppVue
// 	}
// })

let app = Vue.extend({})
routerMap(router)

console.log("app start")
router.start(app,'#app')

