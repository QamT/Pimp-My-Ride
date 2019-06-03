const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('./config');

const sourceMap = config.env !== 'production';

const html = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
    },
  ],
};

const js = {
  test: /\.js(x)?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
    'eslint-loader',
  ],
};

const styleLoader = {
  loader: 'style-loader',
  options: {
    sourceMap,
  },
};

const cssLoader = {
  loader: 'css-loader'
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('autoprefixer')(),
    ],
    sourceMap,
  },
};

const sass = {
  test: /\.s[c|a]ss$/,
  use: [
    MiniCssExtractPlugin.loader,
    cssLoader,
    postcssLoader,
    {
      loader: 'sass-loader',
      options: {
        sourceMap,
      },
    },
  ],
};

const imageLoader = {
  loader: 'image-webpack-loader',
  options: {
    bypassOnDebug: true,
    optipng: {
      optimizationLevel: 7,
    },
    pngquant: {
      quality: '65-90',
      speed: 4,
    },
    mozjpeg: {
      progressive: true,
    },
  },
};

const images = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader?name=assets/[name].[ext]',
    config.env === 'production' ? imageLoader : null,
  ].filter(Boolean),
};

module.exports = [
  html,
  js,
  sass,
  images
];
