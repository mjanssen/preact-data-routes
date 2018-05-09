const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dist = path.join(__dirname, 'public');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: dist,
    filename: 'main.bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: dist,
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  resolve: {
    extensions: ['.js', '.json', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { minimize: true } }, 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      h: ['preact', 'h'],
    }),
    new ExtractTextPlugin({ filename: 'app.css' }),
  ],
};
