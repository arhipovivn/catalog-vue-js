const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  css: {
      loaderOptions: {
          sass: {
            sassOptions: {
              additionalData: `@import "@/assets/styles/styles.scss";`},
          },
      },
  }
};