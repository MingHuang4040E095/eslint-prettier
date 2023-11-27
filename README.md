# eslint-prettier
程式碼格式化範例

## 安裝ESLint
---
### 1.安裝套件
### `npm init @eslint/config`
Which style guide do you want to follow(想選擇哪種規範) → standard

### 2.添加配置文件
建立`.eslintrc.cjs` 檔案，並添加以下設定
```jsx
// .eslintrc.cjs
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard",
    "plugin:vue/vue3-essential"
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        ".eslintrc.{js,cjs}"
      ],
      parserOptions: {
        sourceType: "script"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
    indent: ['error', 2], // tab
    'linebreak-style': ['off', 'windows'], // ['off', 'windows'] 或者 ['error', 'windows']    
    quotes: ['error', 'single'], // 使用單引號 ' '
    semi: [2, 'never'], // 句尾去分號
    'comma-dangle': ['error', 'always-multiline'], // 自動補逗號
    'no-unused-vars': ['error', { vars: 'all' }], // 禁止未使用過的變量
    'prefer-const': 'error', // 沒有重複使用 就要用const
    'no-var': 'error', // 不使用var
  },
};
```

3.VSCode安裝ESLint外掛

# 安裝Prettier
---
### 1.安裝套件
### `npm i prettier prettier-eslint`

### 2.VSCode安裝Prettier ESLint外掛

### 3.專案目錄添加設定檔
專案根目錄建立`.vscode`資料夾，並在其中建立`settings.json`檔案，然後添加以下設定
```jsx
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll": true
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
