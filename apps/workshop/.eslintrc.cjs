/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["cloud-party", "plugin:storybook/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
