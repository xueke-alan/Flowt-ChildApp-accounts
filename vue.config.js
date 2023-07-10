const { defineConfig } = require('@vue/cli-service')
const { name } = require('./package');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8085,
    headers: {			// 重点1: 允许跨域访问子应用页面
      'Access-Control-Allow-Origin': '*',
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      library: `sub-app-code`,
      libraryTarget: 'umd',		// 把子应用打包成 umd 库格式
      // jsonpFunction: `webpackJsonp_${name}`,
    },
  },
})
