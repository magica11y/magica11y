module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: [
    'flowtype',
  ],
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:flowtype/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
};
