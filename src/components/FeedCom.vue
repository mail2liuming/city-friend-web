<script >
	export default {
		props:{
			data:{
				type:Object,
				required: true
			}
		}
	}
</script>

<template>
	<div class="feed-content"> 

	<span> {{data.id}} </span>
	<span> {{data.user_name}} </span>   </div>
</template>

<style lang="sass">


	.feed-content{
		display:flex;
		
		justify-content: space-around;
	}
</style>