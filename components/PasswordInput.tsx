import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import { Eye, EyeClosed } from "lucide-react-native";
import React, { useState } from "react";
import {
  KeyboardTypeOptions,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
export interface InputProps {
  onChange: (field: string, value: string) => void;
  value: string;
  field: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
}

const PasswordInput = ({
  onChange,
  field,
  value,
  placeholder,
  keyboardType,
}: InputProps) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <View style={style.container}>
      <TextInput
        onChange={() => onChange(field, value)}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={!show}
        style={style.input}
      />
      <Pressable onPress={() => setShow(!show)} style={style.button}>
        {show ? (
          <Eye color={colors.charcoal} />
        ) : (
          <EyeClosed color={colors.charcoal} />
        )}
      </Pressable>
    </View>
  );
};

export default PasswordInput;

const style = StyleSheet.create({
  container: {
    borderColor: colors.ironMan,
    borderWidth: 1,
    width: "100%",
    borderRadius: sizes.xs,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    padding: sizes.m,
    paddingRight: 0,
    width: "90%",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});
