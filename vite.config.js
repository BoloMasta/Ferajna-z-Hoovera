import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default (args) => {
  const { mode } = args;
  const genereteScopedName = mode === "production" ? "[hash:base64]" : "[name]__[local]";

  return defineConfig({
    plugins: [react()],

    css: {
      modules: {
        localsConvention: "camelCaseOnly",
        generateScopedName: genereteScopedName,
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/vars"; @import "./src/assets/mixins";`,
        },
      },
    },
  });
};
