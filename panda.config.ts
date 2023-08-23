import { defineConfig } from "@pandacss/dev"
import textStyles from "@/theme/textStyles"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: { value: '#000000' },
          text: { value: '#FFFFFF' }
        },
        disabled: {
          DEFAULT: { value: '#1D1D1F0A' },
          text: { value: '#1D1D1F' }
        },
        divider: {
          value: "#ECECEC"
        }
      },
    },
    extend: {
      textStyles
    }
  },

  // The output directory for your css system
  outdir: "styled-system",
})