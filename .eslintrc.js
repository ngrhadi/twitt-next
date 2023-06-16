module.exports = {
	plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'next',
		'next/core-web-vitals',
		'prettier',
	],
	rules: {
		'no-console': ['warn', { allow: ['error'] }],
		'unused-imports/no-unused-imports': 'warn',
		'unused-imports/no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
		'simple-import-sort/exports': 'warn',
		'simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// ext library & side effect imports
					['^@?\\w', '^\\u0000'], // {s}css files
					['^.+\\.s?css$'], // Lib and hooks
					['^@/lib', '^@/hooks'], // static data
					['^@/data'], // components
					['^@/components', '^@/container'], // zustand store
					['^@/store'], // Other imports
					['^@/'], // relative paths up until 3 level
					[
						'^\\./?$',
						'^\\.(?!/?$)',
						'^\\.\\./?$',
						'^\\.\\.(?!/?$)',
						'^\\.\\./\\.\\./?$',
						'^\\.\\./\\.\\.(?!/?$)',
						'^\\.\\./\\.\\./\\.\\./?$',
						'^\\.\\./\\.\\./\\.\\.(?!/?$)',
					],
					['^@/types'], // other that didnt fit in
					['^'],
				],
			},
		],
	},
};
