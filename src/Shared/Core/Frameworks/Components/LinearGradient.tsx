import { connectStyle } from "@shoutem/theme";
import _ from "lodash";
import React, { PureComponent } from "react";
import { View } from "react-native";
import RNLinearGradient from "react-native-linear-gradient";
import { Theme, withTheme } from "react-native-paper";
const RNLinearGradientPropsKeys = ["start", "end", "colors", "locations"];
type Props = React.ComponentProps<typeof View> & {
  style?: any;
  styleName: string;
  theme: Theme;
  children: React.ReactNode;
  colors: (string | number)[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  useAngle?: boolean;
  angleCenter?: { x: number; y: number };
  angle?: number;
};
class LinearGradient extends PureComponent<Props> {
  render() {
    const { props } = this;
    const styleWithOmissions = _.omit(props.style, RNLinearGradientPropsKeys);
    const linearGradientProps = {
      ...props,
      ..._.pick(props.style, RNLinearGradientPropsKeys)
    };
    return (
      <RNLinearGradient {...linearGradientProps} style={styleWithOmissions}>
        {props.children}
      </RNLinearGradient>
    );
  }
}
const wrappedWithTheme = withTheme(LinearGradient);
const wrappedStyle = connectStyle("shoutem.ui.LinearGradient")(
  wrappedWithTheme
);
export { wrappedStyle as LinearGradient };
