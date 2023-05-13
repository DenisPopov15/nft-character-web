module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
        singleQuote: true,
        semi: false,
      },
    ],
    'react/prop-types': 'off',
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'no-shadow': 'off',
    'no-extra-semi': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
