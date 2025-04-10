// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default withNuxt(
  // Your custom configs here
  [
    {
      name: "custom-prettier",
      plugins: {
        prettier: prettierPlugin,
      },
      rules: {
        // Run prettier as an ESLint rule
        "prettier/prettier": "warn",
      },
    },
    prettierConfig, // Disables conflicting ESLint rules
  ]
);
