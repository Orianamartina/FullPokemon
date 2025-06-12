import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("screen");

export const iconSizes = {
  small: 16,
  medium: 24,
  big: 32,
};

export const sizes = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  full: `${100}%`,
};

export const buttonSizes = {
  large: 200,
  small: 130,
};
