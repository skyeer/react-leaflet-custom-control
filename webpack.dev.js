const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './example/index.js',
  },
  output: {
    path: '/',
    filename: '[name].js',
    publicPath: 'http://localhost:8000/build',
  },
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  devServer: {
    contentBase: './example',
    inline: true,
    port: 8000,
    progress: true,
    stats: {
      cached: false,
    },
  },
})
