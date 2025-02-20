import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import ESLintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});
console.log(compat);
// const eslintConfig = [
//   ...compat.extends("next/core-web-vitals"),
//   prettierConfigRecommended
// ];

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'prettier'],
  }),
];

export default eslintConfig;
