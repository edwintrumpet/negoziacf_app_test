const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    home: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,

      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'NegociaCF',
      hash: true,
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new webpack.DllReferencePlugin({
      // eslint-disable-next-line global-require
      manifest: require('./modules-manifest.json'),
      context: path.resolve(__dirname, '../src'),
    }),
  ],
};
