'use strict'
import FeedsView from './views/feedsview.vue'

export default function(router){
	router.map({
		'/feeds':{
			component: FeedsView
		}
		// '/calendars':{
		// 	component: CalendarsView
		// },
		// '/messages':{
		// 	component: MessageView
		// },
		
	
		// '/login':{
		// component: LoginView
		// },
		// '/signup':{
		// 	component: SignupView
		// },
		// '/profile/:id':{
		// 	component: ProfileView
		// },
		// '/about':{
		// 	component:AboutView
		// },
		// '/freinds':{
		// 	component:FriendsView
		// }
	});

	router.redirect({
		'*': '/feeds'
	});

}