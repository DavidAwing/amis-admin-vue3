module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'quotes': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'lines-between-class-members': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'padded-blocks': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-blocks': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-use-before-define': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-undef': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "object-curly-spacing": process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "multiline-ternary": process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-useless-escape": process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "camelcase": process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "comma-dangle": process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "quote-props": process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/ban-types': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "@typescript-eslint/ban-ts-comment": process.env.NODE_ENV === 'production' ? 'warn' : 'off',

  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
