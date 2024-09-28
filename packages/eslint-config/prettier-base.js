/** @type {import("prettier").Config} */
module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  printWidth: 80,
  endOfLine: "lf",
  quoteProps: "as-needed",
  bracketSameLine: false,
  bracketSpacing: true,
  plugins: ["prettier-plugin-tailwindcss"],
  jsxSingleQuote: false,
};
