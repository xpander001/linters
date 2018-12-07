module.exports = {
  extends: [
    'airbnb',
  ],
  env: {
    browser: true,
    jest: true,
    es6: true
  },
  globals: {
    fetch: true
  },
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off'
  }
};