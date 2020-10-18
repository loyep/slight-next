module.exports = {
  'root': true,
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'plugins': [
    '@typescript-eslint'
  ],
  'env': {
    'browser': true,
    "es2021": true,
    'node': true,
    'es6': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    }
  },
  'settings': {
    'react': {
      'version': 'detect' // 自动读取已安装的react版本
    }
  },
  'rules': {
    // eslint 配置文档 https://eslint.org/docs/rules/
    'no-unused-vars': 0, 
    "react/react-in-jsx-scope": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "react/prop-types": 0,
    'no-console': 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": 0
  },
};
