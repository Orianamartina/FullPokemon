import { colors } from "./colors";

export const fonts = {
  inter: {
    regular: "Inter_400Regular",
    bold: "Inter_700Bold",
  },
  epilogue: {
    regular: "Epilogue_400Regular",
    bold: "Epilogue_700Bold",
  },
};

export const fontSizes = {
  h1: 32,
  h2: 21,
  body: 16,
  caption: 14,
  button: 18,
};

export const fontStyles = {
  inputLabel: {
    color: colors.charcoal,
    fontFamily: fonts.inter.bold,
    fontSize: fontSizes.body,
  },
};
