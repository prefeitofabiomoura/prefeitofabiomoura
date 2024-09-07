module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,jpg,txt,jpeg,webm,css,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};