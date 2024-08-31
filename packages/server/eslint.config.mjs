import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
	{
		languageOptions: {
			globals: { es2020: true, node: true },
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': typescriptPlugin,
		},
		files: ['src/**/*.ts'],
		rules: {
			'import/prefer-default-export': 0,
			'import/no-unresolved': 0,
			'import/no-extraneous-dependencies': 0,
			semi: 2,
			'no-console': 0,
			'no-multi-spaces': 2,
			'space-infix-ops': 2,
			'arrow-spacing': 2,
			'func-style': [2, 'expression'],
			indent: [2, 'tab', { SwitchCase: 1 }],
			'eol-last': 2,
			'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0 }],
			'@typescript-eslint/no-explicit-any': 0,
			'lines-between-class-members': ['error', 'always'],
		},
	},
];
