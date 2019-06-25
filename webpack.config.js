const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: {
    all: './src',
    environmentBlending: './src/environmentBlending',
    invertedColors: './src/invertedColors',
    lightLevel: './src/lightLevel',
    prefersReducedMotion: './src/prefersReducedMotion',
    prefersReducedTransparency: './src/prefersReducedTransparency',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'magica11y.[name].js',
    library: ['magica11y', '[name]'],
    libraryTarget: 'umd',
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
      }),
    ],
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
