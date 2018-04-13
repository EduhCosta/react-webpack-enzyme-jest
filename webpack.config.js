const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    pathinfo: true
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env'],
          plugins: ['transform-decorators-legacy', 'transform-object-rest-spread'],
          cacheDirectory: true
        }
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'sass-loader'
      }, {
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            autoprefixer({
              browsers: [
                '>1%',
                'last 4 versions',
                'Firefox ESR',
                'not ie < 9',
              ],
              flexbox: 'no-2009',
            }),
          ],
        }
      }]
    }, {
      loader: require.resolve('file-loader'),
      exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.(css|scss)$/, /\.json$/],
      options: {
        name: 'media/[name].[hash:8].[ext]',
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    new webpack.DefinePlugin({
      'HOMEPAGE': JSON.stringify('/')
    })
  ]
};