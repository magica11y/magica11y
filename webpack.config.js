const path = require('path');

module.exports = {
  entry: {
    prefersReduceMotion: './source/prefersReduceMotion',
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'build'),
  },
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
