const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')


module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack: (config) => {
    const plugins = []
    plugins.push(new NodePolyfillPlugin())
  },
  // devServer: { //开启代理服务器,但不能配置多个代理，
  //   proxy: 'http://localhost:5050'
  // },
  devServer: {
    proxy: {  //开启代理服务器方式2
      '/requestQianzhui': { //  /requestQianzhui为请求前缀
        target: 'http://localhost:5050', //请求的路径
        pathRewrite:{'^/requestQianzhui':''} ,//正则表达式，重新以/requestQianzhui开头，变成空字符串
        ws: true,  //用于websocket
        changeOrigin: true //设置请求头Host
      },
      '/api': { //  /requestQianzhui为请求前缀
        target: 'http://localhost:5001', //请求的路径
        pathRewrite:{'^/api':''} ,//正则表达式
        ws: true,  //用于websocket
        changeOrigin: true //设置请求头Host
      },
    }}
})
