module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    rules: { '@typescript-eslint/no-floating-promises': 'error' },
    parserOptions: {
        project: './tsconfig.json', // Path to your tsconfig.json file
    },
}
