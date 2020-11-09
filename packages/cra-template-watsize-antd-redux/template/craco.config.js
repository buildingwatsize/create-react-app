const path = require("path")
const webpack = require('webpack')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const CracoLessPlugin = require('craco-less')

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
    {
      plugin: new AntdDayjsWebpackPlugin(),
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#28B32A', // primary color for all components
              '@link-color': '#4ab19d', // link color
              '@success-color': '#52c41a', // success state color
              '@warning-color': '#faad14', // warning state color
              '@error-color': '#f5222d', // error state color
              '@font-size-base': '14px', // major text font size
              '@heading-color': '#333333', // heading text color
              '@text-color': '#444444', // major text color
              '@text-color-secondary': '#555555', // secondary text color
              '@disabled-color': '#666666', // disable state color
              '@border-radius-base': '4px', // major border radius
              '@border-color-base': '#d9d9d9', // major border color
              '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // major shadow for layers
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
