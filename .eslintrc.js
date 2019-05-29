module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true
  },
  rules: {
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "no-new": 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['Utilities', './src/utils'],
        ],
        extensions: ['.js']
      }
    }
  }
};
