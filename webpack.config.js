const { VueLoaderPlugin } = require('vue-loader');
const merge = require('webpack-merge');
const path = require('path');

const config = {
  mode: 'production',
  output: {
    path: path.resolve(`${__dirname}/dist/`),
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
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};

module.exports = [
  merge(config, {
    entry: path.resolve(`${__dirname}/src/main.js`),
    output: {
      filename: 'main.min.js',
      libraryTarget: 'umd',
      library: 'simple-vue-export',
    },
  }),
];
