var webpack = require('webpack');

var config = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/js/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    post: process.env.PORT||8080,
    inline: true,
    hot: true
  },
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
};

module.exports = config;
