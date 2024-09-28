const config = {
  "*.{ts,tsx}": ["pnpm run lint --", "pnpm run check-types --"],
};

module.exports = config;
