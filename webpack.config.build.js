const commonConfig = require('./webpack.config.common.js');
const config = commonConfig;

const path = require("path");

module.exports = (env, argv) => {
  config.mode = argv.mode;

  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
    config.watch = true;
  }

  if (argv.mode === "production") {
    config.devtool = "source-map";
    
    let rootPath001 = path.resolve(__dirname, "./");
    
    config.output.path = path.resolve(rootPath001, "dist");
  }

  return config;
};