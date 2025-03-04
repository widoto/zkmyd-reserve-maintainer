import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    plugins: ['prettier'],
    extends: [
      'plugin:prettier/recommended',  // Prettier 설정을 ESLint에 통합
    ],
    rules: {
      'prettier/prettier': 'error',  // Prettier 오류를 ESLint 오류로 표시
    },
  },
];
