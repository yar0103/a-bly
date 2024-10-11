import { createWebHistory, createRouter } from "vue-router";

import App from './App.vue';

const routes = [
	{
		path: "/", //이경로로 접속하면
		component: App, //이 컴포넌트를 보여줘
	},
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;