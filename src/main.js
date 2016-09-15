import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// import AppVue from './App.vue'
import routerMap from './routers'

Vue.use(VueRouter)
Vue.use(VueResource)

// Vue.http.headers.common['Access-Control-Allow-Origin'] = '*'
// Vue.http.options.xhr = {withCredentials: true};

// Vue.http.headers.common['Content-Type']='application/json'
// Vue.http.headers.common['Content-Type']='application/json'
Vue.http.headers.common['Accept']='application/json'

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

