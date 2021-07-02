// eslint-disable-next-line import/no-extraneous-dependencies
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
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
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
};
