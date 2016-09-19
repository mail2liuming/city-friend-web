<script >
	import { aside } from 'vue-strap'
	export default {
		
		props:['showLeft'],
		// {
			// data:{
			// 	type:Object,
			// 	required: true
			// }
		// 	showLeft:
		// }
		components:{
			aside
		},

	}
</script>

<template>
	<aside :show.sync="showLeft" placement="left" header="Title" width="350">
		<ul>
			<li> login </li>
			<li> messages </li>
			<li> friends </li>
		</ul>
	</aside>
</template>