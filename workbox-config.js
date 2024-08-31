module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,txt,jpeg,css,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};