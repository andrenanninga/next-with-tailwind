const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    modules: "local"
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: ["astroturf/loader"]
    });

    return config;
  }
});
