import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';


const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about/',
		name: 'about',
		meta: {
			title: 'Nested - About Page - Example App'
		},
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	},
	{
		path: '/uslugi/',
		name: 'uslugi',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/ServicesView.vue')
	},
	{
		path: '/portfolio/',
		name: 'portfolio',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about"  */'../views/PortfolioViem.vue'),
		children: [
			{
				// при совпадении пути с шаблоном /user/:id/profile
				// в <router-view> компонента User будет показан UserProfile
				path: 'my_servec/:name',
				name: 'my_servec',
				component: () => import(/* webpackChunkName: "about"  */'../views/PortfolioViem.vue'),
			},
			{
				// при совпадении пути с шаблоном /user/:id/posts
				// в <router-view> компонента User будет показан UserPosts
				path: 'cms_serves/:name',
				name: 'cms_serves',
				component: () => import(/* webpackChunkName: "about"  */'../views/PortfolioViem.vue'),
			}
		]
	},
	{
		path: '/portfolio/:name',
		name: 'portfoliosingle',
		component: () => import(/* webpackChunkName: "about"  */'../views/SingleProfileViem.vue'),
	},
	{ path: '/404', component: () => import(/* webpackChunkName: "about"  */'../views/404View.vue'), },
	{ path: '/:catchAll(.*)', name: 'nonefound', redirect: '/404' },
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
