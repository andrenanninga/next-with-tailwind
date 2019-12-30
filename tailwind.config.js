module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    flexDirection: ["responsive"],
    padding: ["fallback", "default", "responsive"],
    margin: ["fallback", "default", "responsive"]
  },
  plugins: [
    function({ addVariant, e }) {
      addVariant("fallback", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`fallback${separator}${className}`)}`;
        });
      });
    }
  ]
};
