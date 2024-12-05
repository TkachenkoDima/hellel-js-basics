import js from '@eslint/js';

export default [
	js.configs.recommended,

	{
		rules: {
			'no-unused-vars': 'off',
			'no-undef': 'off',
			'no-console': 'off',
			'quotes': ['warn', 'single'],
			'semi': ['warn', 'always'],
		},
	},
];
