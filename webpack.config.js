 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 const conf = {
  entry: path.resolve(__dirname, './scripts/script.js'),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html')
    })
  ],
 }

 module.exports = (env, options) => {
  let production = options.mode === 'production';
  conf.devtool = production ? false : 'eval-sourcemap';
  return conf;
}