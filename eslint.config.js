import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    // extends: ['airbnb-base', 'plugin:prettier/recommended'],
    env: {
      node: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      'prefer-const': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'none',
    },
  },
];
