import { connectAnimation } from "@shoutem/animation";
import { connectStyle } from "@shoutem/theme";
import React, { PureComponent } from "react";
import { View as RNView } from "react-native";
import { Theme, withTheme } from "react-native-paper";
import { LinearGradient } from "./LinearGradient";
type Props = React.ComponentProps<typeof RNView> & {
  style?: any;
  styleName?: string;
  theme: Theme;
};
class View extends PureComponent<Props> {
  render() {
    const style = { ...this.props.style };
    let gradient: React.ReactNode = null;
    if (style.backgroundGradient) {
      gradient = (
        <LinearGradient
          styleName="fill-parent"
          style={style.backgroundGradient}
        />
      );
      // This is not a valid RN View style
      delete style.backgroundGradient;
    }
    return (
      <RNView {...this.props} style={style}>
        {gradient}
        {this.props.children}
      </RNView>
    );
  }
}
const wrappedWithTheme = withTheme(View);

const wrappedStyle = connectStyle("shoutem.ui.View")(
  connectAnimation(wrappedWithTheme)
);
export { wrappedStyle as Content };
