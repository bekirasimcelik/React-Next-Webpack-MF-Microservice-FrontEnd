module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [
    '@next/eslint-plugin-next',
    'react-hooks',
    'prettier', // npm module eslint-plugin-prettier
  ],
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/ignore': ['.css$'],
  },
  // plugins: ['react'],
  rules: {
    'react/prop-types': ['warn'],
    'import/prefer-default-export': ['off'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function', 'function-declaration'],
      },
    ],
  },
};
