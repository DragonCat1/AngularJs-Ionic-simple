module.exports = {
    root: true,
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    extends: [
      'standard'
    ],
    plugins: [
      'html'
    ],
    rules: {
      // allow async-await
      'generator-star-spacing': 'off'
    }
  }
  