// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { router, head, isClient, appOptions }) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);
	head.link.push({
		rel: 'preconnect',
		href: 'https://cdn.apicart.dev'
	});
	head.link.push({
		rel: 'preconnect',
		href: 'https://store-api.apicart.dev'
	});
	head.link.push({
		rel: 'preconnect',
		href: 'https://payments-api.apicart.dev'
	});
}
