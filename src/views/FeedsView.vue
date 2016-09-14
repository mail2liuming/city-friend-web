<script >
	import Feed from '../components/FeedCom.vue'
	export default{
		data(){
			return{
				feeds:[],
				page:1,
				scroll:true
			}
		},
		components: {
			Feed
		},
		route:{
			data(transition){
				this.getTopics()

				//
				// $(window).on('scroll',()=>{
				// 	this.getScrollData();
				// });
			}
		},
		methods:{
			getTopics(){
				this.$http.get('https://mojo-backend-mingliu.c9users.io/v2/feeds/entries?page=#{this.page}')
					.then(response=>{
						this.feeds.concat(response.body);
					})
			},
			// getScrollData(){
			// 	if(this.scroll){
			// 		let totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
			// 		if($(document).height() <= totalheight +200){
			// 			this.scroll = false;
			// 			this.page++;
			// 			this.getTopics();
			// 		}
			// 	}
			// }
		}
	}

</script>

<style >
	.feed-list{
		position: relative;
		padding: 0;
		padding-top: 5rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #ECECEC; 
	}
</style>

<template>
	<section class="feed-list">
		<feed v-for='feed in feeds' :data='feed'></feed>	
	</section>
</template>