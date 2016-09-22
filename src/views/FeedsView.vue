<script >
	import FeedCom from '../components/FeedCom.vue'
	import NavHeader from '../components/NavHeader.vue'
	import HomeTabs from '../components/HomeTabs.vue'
	export default{
		data(){
			return{
				feeds:[],
				page:1,
				scroll:true
			}
		},
		components: {
			FeedCom,
			NavHeader,
			HomeTabs
		},
		route:{
			data(transition){
				this.getTopics()

				window.addEventListener('scroll',this.getScrollData);
			}
		},
		methods:{
			getTopics(){
				let url = 'https://mojo-backend-mingliu.c9users.io/v2/feeds/entries.json?page='+this.page
				console.log(url)
				// var requestHeaders = {'Content-Type':'application/json'}
				this.$http.get(url)
					.then(response=>{
						this.feeds = this.feeds.concat(response.data);
						this.scroll = true;
					})
			},
			getScrollData(){
				if(this.scroll){
					let totalheight = parseFloat(window.innerHeight + parseFloat(window.scrollY));

					var body = document.body,
    				html = document.documentElement;

					var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
					if(height <= totalheight +200){
						this.scroll = false;
						this.page++;
						this.getTopics();
						console.log('get scroll data')
					}
				}
			}
		},
		beforeDestroy:function(){
			window.removeEventListener('scroll',this.getScrollData)
		},

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
	<div>
		<nav-header >
			<home-tabs :active="0"></home-tabs>
		</nav-header>
		<section class="feed-list">
			<feed-com v-for='feed in feeds' :data='feed'>
			
			</feed-com>	
		</section>
	</div>
	
</template>