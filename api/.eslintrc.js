module.exports = {
  'overrides': [{
    'files': [
      '.eslintrc.js',
    ],
    'env': {
      'node': true,
      'browser': false,
    },
  }],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    quotes: [2, 'single', { 'avoidEscape': true }],
    semi: [2, 'always'],
    'object-curly-spacing': [ 'error', 'always' ],
  }
};