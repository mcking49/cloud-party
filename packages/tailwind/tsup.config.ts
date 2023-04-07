import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  entry: {
    index: "index.ts",
    postcss: "postcss.ts",
  },
  sourcemap: true,
  clean: true,
  dts: {
    entry: {
      index: "index.ts",
      postcss: "postcss.ts",
    },
  },
});
