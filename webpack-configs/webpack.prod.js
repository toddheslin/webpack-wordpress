const webpack = require('webpack')
const compiler = require('../webpack.config.js').compiler

compiler.devtool = 'source-map'

// Error: webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead.
// compiler.plugins.push(new webpack.optimize.UglifyJsPlugin({
//   minimize: true,
//   sourceMap: false,
//   output: { comments: false }
// }))

module.exports = compiler
