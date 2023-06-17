import { withThemeByClassName } from "@storybook/addon-styling";

import "../src/styles/index.css";
import { themes } from "@storybook/theming";

if (module?.hot) {
  module?.hot.accept();
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
