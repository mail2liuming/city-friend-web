'use strict'

import Vue from 'vue'

export const setUser = (id,token) => {
	localStorage.id = id
	localStorage.token = token
}

export const getUser = () => {
	return {id:localStorage.id,token:localStorage.token}
}

export const isLogin = () =>{
	if(localStorage.id && localStorage.token){
		return true
	}
	return false;
}

export const logOut = ()=>{
	localStorage.removeItem('id')
	localStorage.removeItem('token')
	Vue.http.headers.common['Authorization']=""
}