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
		methods:{
			openMenu(){
				this.showLeft = !this.showLeft
			},
			navRoute (e, name) {
				this.showLeft = !this.showLeft
                this.$route.router.go({name: name})
            }
		}

	}
</script>

<template>
<div>
	<div class="toolbar-nav"
                    @click="openMenu">
    </div>

    <slot class='slot-tabs'></slot>

    <aside :show.sync="showLeft" placement="left" header="Title" width="350">
		<ul>
			<li @click="navRoute($event, 'login')"> login </li>
			<li> messages </li>
			<li> friends </li>
		</ul>
	</aside>

</div>

	
</template>

<style >
.toolbar-nav {
    width: 49px;
    height: 44px;
    position: relative;
    float :left;
    display: inline;
    background: url("../assets/images/components/nav_icon.png") no-repeat center center;
    background-size: 19px 16px;
    margin: 0;
    z-index: 1;
    top: 0;
    left: 0;
}
.slot-tabs{
    	position:'relative';
    	display: inline;
    	float: right;
    	left:80px;

    }
</style>