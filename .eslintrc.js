/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["cloud-party"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig.json",
      "./apps/*/tsconfig.json",
      "./packages/db/tsconfig.json",
      "./packages/api/tsconfig.json",
      "./packages/ui/tsconfig.json",
    ],
  },
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
