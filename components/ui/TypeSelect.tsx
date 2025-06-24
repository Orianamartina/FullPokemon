import { colors } from "@/constants/colors";
import { Preview } from "@/types/Pokemon";
import { useEffect, useState } from "react";
import CustomDropdown from "./CustomDropdown";

interface TypeSelectProps {
  options: Preview[];
  value: string;
  onChange: (v: string) => void;
}

const TypeSelect = ({ options, value, onChange }: TypeSelectProps) => {
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const transformToDropdown = (data: { name: string; url: string }[]) =>
    data.map((item) => ({
      label: capitalize(item.name),
      value: item.name,
    }));

  useEffect(() => {
    setItems(transformToDropdown(options));
  }, [options]);

  return (
    <CustomDropdown
      options={items}
      value={value}
      onSelect={onChange}
      placeholder={"Filter by type"}
      pressableStyle={{ borderColor: colors.secondaryBase }}
    />
  );
};

export default TypeSelect;
