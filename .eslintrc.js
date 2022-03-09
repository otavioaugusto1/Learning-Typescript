module.exports = {
  env: {
    browser:true,
    es6: true,
    node: true
  },
  extends:[
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  global:{
    Atomics:'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions:{
    ecmaVersion:11,
    sourceType:'module'
  },
  plugins:['@typescript-eslint'],
  rules:{}
}