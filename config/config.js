const path = require('path');

let ROOT = process.env.PWD;

if (!ROOT) {
  ROOT = process.cwd();
}

const config = {
  googleAnalyticsUA: '',

  favicon: path.join(ROOT, '/src/assets/favicon.png'),

  dev_host: 'localhost',

  port: process.env.PORT || 8000,

  env: process.env.NODE_ENV,
  root: ROOT,
  paths: {
    config: 'config',
    src: 'src',
    dist: 'dist',
  }
};

module.exports = config;
