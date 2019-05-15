module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react-hooks', 'emotion'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'error',
    'react/prop-types': 'warn',
    'react/display-name': 'warn',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 0,
    'no-underscore-dangle': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'warn',
      {
        packageDir: [
          './',
          './themes/gatsby-theme-jamfury-analytics',
          './themes/gatsby-theme-jamfury-i18n',
          './themes/gatsby-theme-jamfury-base',
          './starters/gatsby-starter-jamfury-base',
        ],
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
}
