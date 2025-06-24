import { colors } from "@/constants/colors";
import { textStyles as defaultTextStyles, fonts } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";

const ListField = ({
  title,
  value,
  textStyles,
}: {
  title: string;
  value: string | number;
  textStyles?: StyleProp<TextStyle>;
}) => {
  return (
    <View style={style.container}>
      <Text style={[style.title, defaultTextStyles.capitalized]}>{title}:</Text>
      <Text style={[style.value, defaultTextStyles.capitalized, textStyles]}>
        {value}
      </Text>
    </View>
  );
};

export default ListField;
const style = StyleSheet.create({
  container: {
    padding: sizes.xs,
    display: "flex",
    flexDirection: "row",
    gap: sizes.xs,
  },
  title: {
    color: colors.ghost,
    fontSize: sizes.m,
    marginBottom: sizes.s,
    fontFamily: fonts.inter.bold,
  },
  value: {
    fontSize: sizes.m,
    color: colors.charcoal,
  },
});
