const webpack = require('webpack')
const join = require('path').join
const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const THEME_NAME = 'awesome-theme'
exports.THEME_NAME = THEME_NAME

exports.compiler = {
  entry: './' + THEME_NAME + '/index.js',

  output: {
    filename: 'bundle.js',
    path: join(__dirname, `/wordpress/wp-content/themes/${THEME_NAME}/assets`),
    publicPath: '/wp-content/themes/' + THEME_NAME + '/assets'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader?presets=es2015',
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader', {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [autoprefixer]
              }
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=10000',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {context: join(__dirname, `/${THEME_NAME}/theme-files`), from: './**/*', to: '../'}
    ], {ignore: ['./styles', './js', './index.js']}),
    new WriteFilePlugin()
  ]
}
