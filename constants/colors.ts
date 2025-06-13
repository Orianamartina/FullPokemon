import { StyleProp, TextStyle } from "react-native";

export const colors = {
  primaryBase: "#01164D",
  primaryLight: "#345978",
  secondaryBase: "#4f80ff",
  secondaryLight: "#a1d0ff",
  sunYellow: "#ffd233",
  hotPink: "#fe566a",
  naruto: "#ea9828",
  neutral: "#3c4144",
  ironMan: "#a4afb8",
  smoke: "#e2e6ea",
  white: "#ffffff",
  charcoal: "#3c4144",

  // Feedback
  error: "#ed1a37",
  warning: "#f4b510",
  success: "#05c25c",

  //Pokémon type colors
  water: "#2A9DF4",
  electric: "#F5C900",
  ground: "#D6A35D",
  rock: "#BFAE94",
  fairy: "#F2A6D8",
  bug: "#A6BF39",
  psychic: "#F67DAD",
  flying: "#93C5F9",
  fighting: "#C44436",
  ghost: "#5E5A80",
  ice: "#A0E8E0",
  dragon: "#7045AF",
  dark: "#34303E",
  steel: "#8FA8B8",
  normal: "#D8D3C3",
};

export const pokemonColorVariants: Record<string, StyleProp<TextStyle>> = {
  water: { backgroundColor: colors.water, color: colors.white },
  electric: { backgroundColor: colors.electric },
  ground: { backgroundColor: colors.ground },
  rock: { backgroundColor: colors.rock },
  fairy: { backgroundColor: colors.fairy },
  bug: { backgroundColor: colors.bug },
  psychic: { backgroundColor: colors.psychic },
  flying: { backgroundColor: colors.flying },
  fighting: { backgroundColor: colors.fighting },
  ghost: { backgroundColor: colors.ghost },
  ice: { backgroundColor: colors.ice },
  dragon: { backgroundColor: colors.dragon },
  dark: { backgroundColor: colors.dark },
  steel: { backgroundColor: colors.steel },
  normal: { backgroundColor: colors.normal },
  grass: { backgroundColor: colors.success },
  poison: { backgroundColor: colors.sunYellow },
  fire: { backgroundColor: colors.naruto },
};
