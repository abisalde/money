import { DefaultTheme, ExtendedTheme } from "@react-navigation/native";

export const palette = {
  primary: "#101010",
};

export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
  },
};

export const DarkTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    background: "",
    foreground: "",
    text: "",
    shadow: "",
    borderColor: "",
  },
};
