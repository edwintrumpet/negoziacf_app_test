const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    home: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,

      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    disableHostCheck: false,
    open: true,
    hot: true,
  },
  plugins: [
    new Dotenv(),
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      title: 'NegoziaCF',
      hash: false,
      template: path.resolve(__dirname, '../public/index.html'),
    }),
  ],
};
