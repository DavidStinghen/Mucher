module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  rules: {
    camelcase: 'off'
  }
}
