var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  debug:true,
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}

/*devtool: '#inline-source-map'*/
/*source-map*/
/*#eval-source-map*/
/*'cheap-module-eval-source-map'*/
