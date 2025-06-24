import { colors } from "@/constants/colors";
import { sizes } from "@/constants/sizes";
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Option {
  label: string;
  value: string;
}

interface Props {
  options: Option[];
  value: string | null;
  onSelect: (value: string) => void;
  placeholder?: string;
  pressableStyle?: object;
}

const CustomDropdown = ({
  options,
  value,
  onSelect,
  placeholder,
  pressableStyle = {},
}: Props) => {
  const [visible, setVisible] = useState(false);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <>
      <Pressable
        style={[styles.trigger, pressableStyle]}
        onPress={() => setVisible(true)}
      >
        <Text style={styles.triggerText}>{selectedLabel ?? placeholder}</Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.modal}>
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.option}
                  onPress={() => {
                    onSelect(item.value);
                    setVisible(false);
                  }}
                >
                  <Text>{item.label}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  trigger: {
    padding: 12,
    borderWidth: 1,
    borderColor: colors.secondaryBase,
    borderRadius: sizes.s,
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  triggerText: {
    fontSize: sizes.m,
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.charcoal + 80,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "80%",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: sizes.m,
    maxHeight: "60%",
  },
  option: {
    paddingVertical: 12,
    borderBottomColor: colors.smoke,
    borderBottomWidth: 1,
  },
});

export default CustomDropdown;
