const { jsxSingleQuote } = require("./packages/eslint-config/prettier-base");

module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 80,
  endOfLine: "lf",
  quoteProps: "as-needed",
  bracketSameLine: false,
  bracketSpacing: true,
  plugins: ["prettier-plugin-tailwindcss"],
  jsxSingleQuote: false,
};
