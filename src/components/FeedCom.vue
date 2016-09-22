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
	<p> {{data.id}}  {{data.user_name}} </p>
</template>