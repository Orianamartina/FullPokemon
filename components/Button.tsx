import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { buttonSizes, sizes } from "@/constants/sizes";
import React from "react";
import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";

interface Props {
  text: string;
  onClick: () => void;
  variant: "primary" | "secondary";
  size: "large" | "small";
  state?: "enabled" | "disabled";
}

const Button = ({ text, onClick, variant, size, state = "enabled" }: Props) => {
  const variantStyles = styleVariant[variant][state];
  return (
    <Pressable
      style={[genericButtonStyle, buttonSizes[size], variantStyles.button]}
      onPress={onClick}
    >
      <Text style={[genericTextStyle, variantStyles.text]}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const genericButtonStyle: StyleProp<ViewStyle> = {
  paddingVertical: sizes.m,
  borderRadius: sizes.xs,
  justifyContent: "center",
  alignItems: "center",
};

const genericTextStyle: StyleProp<TextStyle> = {
  fontFamily: fonts.inter.bold,
  fontSize: sizes.m,
};

const styleVariant = {
  primary: {
    enabled: {
      button: {
        backgroundColor: colors.secondaryBase,
      },
      text: {
        color: colors.white,
      },
    },
    disabled: {
      button: {
        backgroundColor: colors.ironMan,
      },
      text: {
        color: colors.white,
      },
    },
  },
  secondary: {
    enabled: {
      button: {
        borderColor: colors.secondaryBase,
        borderWidth: 1,
      },
      text: {
        color: colors.secondaryBase,
      },
    },
    disabled: {
      button: {
        borderColor: colors.ironMan,
        borderWidth: 1,
      },
      text: {
        color: colors.ironMan,
      },
    },
  },
};
