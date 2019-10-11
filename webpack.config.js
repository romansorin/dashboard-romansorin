const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProd ? 'production' : 'development',

  entry: {
    app: path.join(__dirname, 'resources/js/index.js')
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: { presets: ['@babel/env'] }
      }
    ]
  },

  output: {
    filename: isProd ? 'js/[name].[hash].js' : 'js/[name].js',
    path: path.join(__dirname, 'public/'),
    publicPath: '/'
  },

  devtool: isProd ? undefined : 'inline-source-map',

  devServer: isProd
    ? undefined
    : {
      host: '127.0.0.1',
      port: 9000,
      historyApiFallback: true,
      hot: true,
      inline: true,
      contentBase: path.join(__dirname, 'public'),

      proxy: {
        '*': {
          target: 'http://127.0.0.1:8000',
          changeOrigin: true
        }
      },

      watchOptions: {
        aggregateTimeout: 300,
        poll: 2000
      }
    },

  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' },
    modules: [
      'node_modules',
      path.join(__dirname, 'resources/js'),
      path.join(__dirname, 'resources/img')
    ],
    extensions: ['.js', '.jsx', '.json']
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),

    new webpack.NamedModulesPlugin(),

    new ManifestPlugin({
      // Call the manifest mix-manifest so that we can use
      // Laravel's mix() helper to serve assets
      fileName: 'mix-manifest.json',
      basePath: '/'
    })
  ]
}
