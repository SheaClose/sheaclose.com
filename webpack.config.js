const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: [
    './react/index.js',
    './angular/app.js'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
				test: /\.css/
				, exclude: /node_modules/
				, loader: 'style-loader!css-loader'
			}

    ]
  },
  // watch: true,
  devServer: {
    stats: 'errors-only',
  //   hot: true,
  //   inline: true
  //
  //
  },
  // plugins:[
  //   new webpack.optimize.UglifyJsPlugin({
  //     beautify: false,
  //     mangle: {
  //       screw_ie8: true,
  //       keep_fnames: true
  //     },
  //     compress: {
  //       screw_ie8: true
  //     },
  //     comments: false
  //   })
  // ]
}
