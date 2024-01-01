import {
  headerDarkColor,
  headerLigthColor,
  bodyDarkColor,
  bodyLigthColor,
  textAreaDark,
  textAreaLigth,
  textAreaBorderDark,
  textAreaBorderLight,
  textDark,
  textLight,
  footerDark,
  footerLight,
} from "./variables";

export const LightTheme = {
  header: headerLigthColor,
  body: bodyLigthColor,
  textArea: textAreaLigth,
  textAreaBorder: textAreaBorderLight,
  text: textDark,
  footer: footerLight,
  filter: "",
};
export const DarkTheme = {
  header: headerDarkColor,
  body: bodyDarkColor,
  textArea: textAreaDark,
  textAreaBorder: textAreaBorderDark,
  text: textLight,
  footer: footerDark,
  filter: "invert(100%)",
};
