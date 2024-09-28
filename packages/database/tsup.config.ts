import { type Options, defineConfig } from "tsup";

const config = defineConfig((options: Options) => ({
  ...options,
  clean: true,
  dts: true,
  entry: ["./src/index.ts"],
  format: ["cjs"],
  sourcemap: true,
}));

export default config;
