const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  plugins: [
    new HTMLWebpackPlugin({
      filename: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  optimization: {
    splitchunks: {
      chunks: 'all',
    }
  }
  mode: 'development',
  entry: {
    header: {
      import: './modules/header/header.js',
      dependOn: 'shared',
    },
    body: {
      import: './modules/body/body.js',
      dependOn: 'shared',
    },
    devServer: {
      static: path.join(__dirname, './public'), 
      open: true,
      compress: true,
      port: 8564,
    },
    footer: {
      import: './modules/footer/footer.js',
      dependOn: 'shared',
    },
    shared: 'jquery',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
};
