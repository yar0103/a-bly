import { createWebHistory, createRouter } from "vue-router";
import LoginPage from './components/LoginPage.vue';

const routes = [
	{
		path: "/myPage", //이경로로 접속하면
		component: LoginPage, //이 컴포넌트를 보여줘
	},
];

const router = createRouter({
history: createWebHistory(),
routes,
});

export default router;