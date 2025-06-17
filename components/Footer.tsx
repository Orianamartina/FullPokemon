import { colors } from "@/constants/colors";
import { fonts, fontSizes } from "@/constants/fonts";
import { iconSizes, sizes } from "@/constants/sizes";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
const ale = require("@/assets/images/ale.png");

interface FooterProps {
  light?: boolean;
}

const Footer = ({ light = true }: FooterProps) => {
  return (
    <View style={styles.footer}>
      <Text
        style={{
          ...styles.footerText,
          color: light ? colors.white : colors.charcoal,
        }}
      >
        Powered by Ale
      </Text>
      <Image
        source={ale}
        height={sizes.xl}
        width={sizes.xl}
        style={styles.ale}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: sizes.s,
    marginTop: sizes.m,
  },
  footerText: {
    fontFamily: fonts.inter.regular,
    fontSize: fontSizes.body,
  },
  ale: {
    width: iconSizes.big,
    resizeMode: "contain",
  },
});
