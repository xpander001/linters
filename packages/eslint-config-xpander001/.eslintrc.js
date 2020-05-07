const prettierConfig = require('./.prettierrc');

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  globals: {
    fetch: true,
  },
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
  },
};
