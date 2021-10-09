module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/_global.scss";
        `
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
