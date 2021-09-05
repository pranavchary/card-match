module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'@vue/airbnb',
	],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'no-console': 'off',
		'no-debugger': 'error',
		'no-plusplus': 'off',
		'max-len': ['warn', { code: 160 }],
	},
};