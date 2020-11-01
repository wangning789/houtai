module.exports = {
    devServer: {
      proxy: {
        '/api': {
          ws: false,
          target: 'https://www.liulongbin.top:8888/api/private/v1',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
      }
    },
  } 