import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native";
export interface InputProps {
  onChange: (field: string, value: any) => void;
  value?: string;
  field: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
}

const FormInput = ({
  onChange,
  field,
  value,
  placeholder,
  keyboardType,
}: InputProps) => {
  return (
    <TextInput
      onChange={() => onChange(field, value)}
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={style.input}
    />
  );
};

export default FormInput;

const style = StyleSheet.create({
  input: {
    padding: sizes.m,
    borderColor: colors.ironMan,
    borderWidth: 1,
    width: "100%",
    borderRadius: sizes.xs,
  },
});
