const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, './docs')]),
    new HtmlWebpackPlugin({
      template: './example/index.html',
    }),
  ],
})
