import { defineConfig } from "@pandacss/dev";

import { semanticTokens } from "@/theme/semantic-token";
import { tokens } from "@/theme/token";

export default defineConfig({
  preflight: true,

  globalCss: {
    html: {
      height: "100vh",
    },
    "#root": {
      height: "100%",
      fontFamily: "Notosans JP",
      fontSize: "13px",
    },
  },

  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],

  theme: {
    extend: {
      tokens,
      semanticTokens,
    },
  },

  jsxFramework: "react",
  outdir: "styled-system",
});
