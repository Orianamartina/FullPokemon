import { colors } from "@/constants/colors";
import { fonts, textStyles } from "@/constants/fonts";
import { sizes } from "@/constants/sizes";
import { StyleSheet, Text, View } from "react-native";

const ListField = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <View style={style.container}>
      <Text style={[style.title, textStyles.capitalized]}>{title}:</Text>
      <Text style={[style.value, textStyles.capitalized]}> {value}</Text>
    </View>
  );
};

export default ListField;
const style = StyleSheet.create({
  container: {
    padding: sizes.xs,
    display: "flex",
    flexDirection: "row",
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
