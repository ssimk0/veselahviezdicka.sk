module.exports = {
  transpileDependencies: ['vuex-module-decorators'],
  devServer: {
    port: 8081,
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
      },
    },
  },
};
