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
    'node': true,
    'es6': true,
    'mocha': true,
    'jest': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  },
  'globals': {
    // 'wx': 'readonly',
  },
  'settings': {
    'react': {
      'version': 'detect' // 自动读取已安装的react版本
    }
  },
  'rules': {
    // eslint 配置文档 https://eslint.org/docs/rules/
    'no-extra-semi': 0, // 禁止不必要的分号
    'quotes': ['error', 'single'], // 强制使用单引号
    'no-unused-vars': 0, // 不允许未定义的变量
    // ...你自己的配置
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'eqeqeq': ['warn', 'always'],
    'prefer-const': ['error', {'destructuring': 'all', 'ignoreReadBeforeAssign': true}],
    // @typescript-eslint 配置文档 https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/README.md
    '@typescript-eslint/indent': ['error', 2, { VariableDeclarator: 2, SwitchCase: 2 }],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/no-triple-slash-reference': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/triple-slash-reference': ['error', { 'path': 'always', 'types': 'never', 'lib': 'never' }],
    '@typescript-eslint/explicit-function-return-type': 0, // 不检测函数返回类型，让 TS 自动推断
    // React 校验规则  配置文档 https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-indent': [2, 2],
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/prop-types': 0, // 使用了 TS，不需要 再使用 PropTypes 校验
    'jsx-control-statements/jsx-use-if-tag': 0
  },
};
