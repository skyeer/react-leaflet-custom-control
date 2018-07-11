const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'react-leaflet-custom-control.js',
    library: 'ReactLeafletCustomControl',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  externals: ['leaflet', 'react', 'react-leaflet', 'prop-types', 'react-dom'],
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJsPlugin({ sourceMap: false }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
})
