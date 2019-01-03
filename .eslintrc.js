module.exports = {
  extends: 'react-app',
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
}
