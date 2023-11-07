/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['prettier'],
  rules: {
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': ['error'],
    'vue/no-reserved-component-names': 'off',
    'no-undef': 'off'
  }
}
