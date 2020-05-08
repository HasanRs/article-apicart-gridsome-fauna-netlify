<template>
  <Layout>
		<apicart-category class="category" />
  </Layout>
</template>

<script>
import { ApicartCategory } from '~/assets/js/app.js';

export default {
	components: {
		'apicart-category': ApicartCategory,
	},
	metaInfo: {
		title: 'JAMstack e-commerce',
		meta: [
			{ key: 'description', name: 'description', content: 'JAMstack e-commerce example using Apicart, FaunaDB, Gridsome and Netlify!' }
		]
	}
}
</script>

<style>
.category {
	margin-top: 50px;
	margin-bottom: 50px;
}
</style>
