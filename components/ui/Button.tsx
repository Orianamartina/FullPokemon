import { colors } from "@/constants/colors";
import { fonts } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

interface Props extends PressableProps {
  text: string;
  onPress: () => void;
  variant: "primary" | "secondary";
  size: number;
  state?: "enabled" | "disabled";
}

const Button = ({
  text,
  onPress,
  variant,
  size,
  state = "enabled",
  ...props
}: Props) => {
  const variantStyles = styleVariant[variant][state];
  return (
    <Pressable
      style={[genericButtonStyle, { width: size }, variantStyles.button]}
      onPress={onPress}
      {...props}
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
