const config = {
  "/apps/**/*.{js,ts,tsx}": ["prettier --write", "eslint --fix"],
  "/packages/**/*.{js,ts,tsx}": ["prettier --write", "eslint --fix"],
  "*.json": ["prettier --write"]
};

module.exports = config;
