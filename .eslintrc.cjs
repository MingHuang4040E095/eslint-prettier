module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:vue/vue3-essential',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    indent: ['error', 2], // tab
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'], // 使用單引號 ' '
    semi: [2, 'never'], // 句尾去分號
    'comma-dangle': ['error', 'always-multiline'], // 自動補逗號
    'no-unused-vars': ['error', { vars: 'all' }], // 禁止未使用過的變量
    'prefer-const': 'error', // 沒有重複使用 就要用const
    'no-var': 'error', // 不使用var
  },
}
