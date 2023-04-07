import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  outExtension({ format }) {
    return {
      js: `.${format}.js`,
    };
  },
  entry: {
    index: "src/index.ts",
    tailwind: "tailwind.config.ts",
  },
  external: ["react", "react-dom"],
  sourcemap: true,
  clean: true,
  dts: {
    entry: {
      index: "src/index.ts",
      tailwind: "tailwind.config.ts",
    },
  },
});
