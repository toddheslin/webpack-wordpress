const webpack = require('webpack') // eslint-disable-line no-unused-vars
const DashboardPlugin = require('webpack-dashboard/plugin')
const compiler = require('../webpack.config.js').compiler
const THEME_NAME = require('../webpack.config.js').THEME_NAME
const join = require('path').join

const proxyConfig = {
  'target': {
    'host': 'localhost',
    'protocol': 'http:',
    'port': 8888
  },
  ignorePath: false,
  changeOrigin: true,
  secure: false
}

compiler.context = join(__dirname, '../')
compiler.devtool = 'eval-source-map'
compiler.plugins.push(new DashboardPlugin())
compiler.plugins.push(new webpack.NamedModulesPlugin())
compiler.plugins.push(new webpack.HotModuleReplacementPlugin())
compiler.devServer = {
  contentBase: './wordpress/wp-content/themes/' + THEME_NAME + '/assets',
  hot: true,
  port: 3000,
  proxy: {
    '/': proxyConfig,
    '**': proxyConfig
  }
}

module.exports = compiler
