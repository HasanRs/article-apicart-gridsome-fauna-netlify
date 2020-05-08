const merge = require('webpack-merge')

module.exports = {
	siteName: 'E-commerce',
	plugins: [],
	configureWebpack(config) {
		return merge({
			resolve: {
				mainFields: ['module', 'main', 'browser']
			}
		}, config)
	}
}
