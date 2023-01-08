'use strict'
const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

function resolve(dir) { return require('path').join(__dirname, dir) }

module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: config => {

    config.plugin('monaco').use(new MonacoWebpackPlugin())
    config.merge({
      resolve: {
        conditionNames: ['require', 'node']
      }
    })

    // // set svg-sprite-loader
    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()
    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()



    if (process.env.NODE_ENV === 'production') {
      // config.output.filename('js/[name].js').end();
      // config.output.chunkFilename('js/[name].js').end();
      // // 修改生产配置
      // config.plugin('extract-css').tap(args => [{
      //   filename: `css/[name].css`,
      //   chunkFilename: `css/[name].css`
      // }])
    } else {

    }
  },
  configureWebpack: {
    name: "MyBI",
    resolve: {
      alias: {
        '@': resolve('src')
      },
      fallback: {
        crypto: false,
        fs: false
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        "React": "react"
      }),
      new NodePolyfillPlugin()
    ],
    mode: "development",
    devtool: "cheap-source-map"
  },
})
