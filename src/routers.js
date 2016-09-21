'use strict'
import FeedsView from './views/feedsview.vue'
import LoginView from './views/LoginView.vue'

export default function(router){
	router.map({
		'/feeds':{
			component: FeedsView
		},
		// '/calendars':{
		// 	component: CalendarsView
		// },
		// '/messages':{
		// 	component: MessageView
		// },
		
	
		'/login':{
			name:'login',
			component: LoginView
		}
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