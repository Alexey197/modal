module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-plusplus": "off",
    "comma-dangle": "off",
    "no-alert": "off",
    "prefer-destructuring": "off",
    "no-extra-semi": "off",
    "no-console": "off",
    "prefer-template": "off",
    "default-case": "off",
    "max-len": ["error", { "ignoreTrailingComments": true }],
    "spaced-comment": "off",
    "prefer-const": "off",
    "semi": "off",
    "eol-last": "off",
    "no-trailing-spaces": "off",
    "arrow-parens": "off",
    "arrow-body-style": "off",
    "object-curly-spacing": "off"
  }
};
