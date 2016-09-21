<script>
	import NavHeader from '../components/NavHeader.vue'
	import { input } from 'vue-strap'
	export default{
		data(){
			return {
				email:"",
				pwd:""
			}
		},
		components:{
			NavHeader,
			'bs-input':input
		},
		methods:{
			doLogin(){
				// this.$route.router.go('/')
			}
		}
	}
</script>

<template>
	<div>
		<nav-header ></nav-header>
		<section class="container">
			<bs-input label='email' :value.sync="email"></bs-input>
			<bs-input label='password' :value.sync="pwd"></bs-input>
		</section>
	</div>
	
</template>