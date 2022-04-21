module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	rules: {
		'no-console': 'off',
		'no-underscore-dangle': 'off',
	},

	extends: ['airbnb-base', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
	},
	plugins: ['prettier'],
};
