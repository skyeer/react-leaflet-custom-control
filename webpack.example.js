const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: './example/index.js',
  output: {
    path: '/example',
    filename: '[name].[chunkhash].js',
    publicPath: 'http://localhost:8000/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
    }),
  ],
  devServer: {
    contentBase: './example',
    port: 8000,
  },
})
