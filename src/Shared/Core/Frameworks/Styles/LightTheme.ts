/* @flow */

import color from "color";
import { black, pinkA400, white } from "./Colors";
import fonts from "./Fonts";

export default {
  dark: false,
  roundness: 4,
  colors: {
    // primary: "#6200ee",
    primary:"#4caf50",
    success:"#4caf50",
    accent: "#03dac4",
    background: "#f6f6f6",
    surface: white,
    error: "#B00020",
    text: black,
    disabled: color(black)
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color(black)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(black)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: pinkA400
  },
  fonts,
  gutter: {
    smallGutter: 5,
    mediumGutter: 15,
    largeGutter: 30,
    extraLargeGutter: 45
  }
};
