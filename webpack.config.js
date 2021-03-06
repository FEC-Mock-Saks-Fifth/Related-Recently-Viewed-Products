var path = require('path');
var src_dir = path.join(__dirname, './client/src');
var public_dir = path.join(__dirname, './client/public');

module.exports = {
  entry: `${src_dir}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: public_dir
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: src_dir,
        loader: 'babel-loader',
        options: {
          'presets': ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  }
};