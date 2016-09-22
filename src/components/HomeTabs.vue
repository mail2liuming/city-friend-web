<script >
	import {tabset,tab} from 'vue-strap'
	export default {
		props:['active'],
		components:{
			tabset,
			tab
		},
		methods:{
			onTabClick(tab){
				switch(tab){
					case 0:
						this.$route.router.go('/')
					break;
					case 1:
					break;
					case 2:
					break;
					default:
					break;
				}
			}
		}
	}
</script>

<template>

	<tabset :active.sync="active">
		<tab header = "feeds"></tab>
		<tab header = 'calendar'></tab>
		<tab header = 'messages'></tab>
	</tabset>


	
</template>