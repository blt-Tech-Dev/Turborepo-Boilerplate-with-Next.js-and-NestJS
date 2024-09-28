const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["./base.js", require.resolve("@vercel/style-guide/eslint/next")],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  rules: {
    quotes: ["error", "double"],
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        parser: "flow",
      },
    ],
  },
  parser: "@typescript-eslint/parser",
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
