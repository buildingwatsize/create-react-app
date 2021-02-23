const path = require("path")
const webpack = require('webpack')

module.exports = {
  webpack: {
    alias: {
      // '@': path.join(path.resolve(__dirname, './src')),
      'components': path.resolve(__dirname, './src/components/'),
      'images': path.resolve(__dirname, './src/images/'),
      'layouts': path.resolve(__dirname, './src/layouts/'),
      'pages': path.resolve(__dirname, './src/pages/'),
      'utils': path.resolve(__dirname, './src/utils/'),
    }
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    {
      plugin: new webpack.optimize.AggressiveMergingPlugin(),
    },
  ],
}
