/* @flow */
import color from "color";
import { Theme } from "react-native-paper/typings";
import {
  black,
  grey800,
  lightBlue500,
  pinkA100,
  redA400,
  white
} from "./Colors";
import DefaultTheme from "./LightTheme";
// import type { Theme } from "react-native-paper";
const DarkTheme: Theme | any = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: lightBlue500,
    background: "#242424",
    surface: grey800,
    error: redA400,
    text: white,
    disabled: color(white)
      .alpha(0.3)
      .rgb()
      .string(),
    placeholder: color(white)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(black)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: pinkA100
  }
};

export default DarkTheme;
