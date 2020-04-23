// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'vue/html-indent': ['error', 2, {}],
    'vue/script-indent': ['error', 2, {
      baseIndent: 0
    }],
    'no-multiple-empty-lines': ['error', {
      max: 2,
      maxEOF: 0,
      maxBOF: 0
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 2,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow variables like >> user_id
    camelcase: 0,
    'no-trailing-spaces': [
      'error', { skipBlankLines: true }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    __typecheck: true,
    __type: true
  }
}
