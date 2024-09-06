import { lazy, LazyExoticComponent } from 'react';

type Route = {
	path: string;
	component: LazyExoticComponent<() => JSX.Element>;
};

const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));

export const routes: Route[] = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
];
