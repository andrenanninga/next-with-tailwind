const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.tsx", "./pages/**/*.tsx"],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-nested"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
