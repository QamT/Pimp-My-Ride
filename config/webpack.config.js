const path = require('path');

const config = require('./config');
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

module.exports = {
  context: path.join(config.root, config.paths.src),
  entry: [
    path.join(config.root, config.paths.src, 'index.js')
  ],
  output: {
    path: path.join(config.root, config.paths.dist),
    filename: '[name].bundle.js',
<<<<<<< HEAD
    publicPath: '/',
=======
    publicPath: '/dist/',
>>>>>>> a430108b40dadfb0af631422cab3f26ddcfa016c
  },
  resolve: {
    alias: {
      Utilities: path.join(config.root, config.paths.src, 'utils')
    }
  },
  mode: ['production', 'development'].includes(config.env)
    ? config.env
    : 'development',
  devtool: config.env === 'production'
    ? 'hidden-source-map'
    : 'cheap-eval-source-map',
  devServer: {
    contentBase: path.join(config.root, config.paths.src),
    watchContentBase: true,
    hot: true,
    open: true,
    port: config.port,
    host: config.dev_host,
  },
  module: {
    rules: loaders,
  },
  plugins,
};
