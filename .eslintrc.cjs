module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "prettier",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",

    // "eslint-config-prettier",
    // antfu/unplugin-auto-import
    './.eslintrc-auto-import.json'
  ],
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    withDefaults: "readonly",
  },
  // plugins: [
  //   "eslint-plugin-prettier"
  // ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'vue/multi-word-component-names': 'off',
    'space-before-function-paren': 'off',
    'global-require': 'off',
    semi: ['error', 'never'],
    'no-plusplus': 'off',
    // 'prettier/prettier': [
    //   "error",
    //   {
    //     singleQuote: true
    //   }
    // ]
  },
}
