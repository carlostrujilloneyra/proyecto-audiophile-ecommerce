import { EarphonePage, HeadphonePage, HomePage, SpeakerPage } from "../ecommerce/pages";

type JSXComponent = () => JSX.Element;

interface Route {
	to: string,
	path: string,
	Component: JSXComponent,
	name: string
}

export const routes: Route[] = [
	{
		to: '/',
		path: '/',
		Component: HomePage,
		name: 'Home'
	},

	{
		to: '/headphones',
		path: '/headphones',
		Component: HeadphonePage,
		name: 'Headphones'
	},

	{
		to: '/speakers',
		path: '/speakers',
		Component: SpeakerPage,
		name: 'Speakers'
	},

	{
		to: '/earphones',
		path: '/earphones',
		Component: EarphonePage,
		name: 'Earphones'
	}

];