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
	<p> {{data.id}} </p>
</template>