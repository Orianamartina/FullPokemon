import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { SearchIcon } from "lucide-react-native";
import React from "react";
import { TextInput, View } from "react-native";

interface SearchBarProps {
  onSearch: (query: string) => void;
}
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [value, setValue] = React.useState("");
  return (
    <View
      style={{
        padding: sizes.s,
        borderRadius: sizes.s,
        backgroundColor: colors.white,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        borderWidth: 1,
        borderColor: colors.secondaryBase,
      }}
    >
      <TextInput
        placeholder="Search..."
        style={{
          width: "90%",
        }}
        value={value}
        onChange={(value) => {
          setValue(value.nativeEvent.text);
          onSearch(value.nativeEvent.text);
        }}
      />
      <SearchIcon color={colors.secondaryBase} />
    </View>
  );
};

export default SearchBar;
