/*
 * @Date: 2021-10-28
 * @Description:
 */

const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  lintOnSave: false,
  devServer: {
    open: true
  },
  chainWebpack(config) {
    config.module.rule("scss").oneOfs.store.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [resolve("src/styles/index.scss")]
        });
    });
  }
};
