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
				this.$http.post('https://mojo-backend-mingliu.c9users.io/v2/login',{email:this.email,password:this.pwd}).then(resonpse=>{
					console.log(resonpse.data.token)
					this.$route.router.go('/')
				})
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
			<a class="button" @click="doLogin">登录</a>
		</section>
	</div>
	
</template>