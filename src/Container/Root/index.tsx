import { StyleProvider } from "@shoutem/theme";
import * as React from "react";
import { Provider as ThemeProvider } from "react-native-paper";
import { Provider } from "react-redux";
import createStore from "../../Redux";
import { CreateStyle, LightTheme } from "../../Shared/Core/Frameworks/Styles";
import Navigation from "../Navigation";
const store = createStore();
const RootContainer = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={LightTheme}>
        <StyleProvider style={CreateStyle(LightTheme)}>
          <>
            <Navigation></Navigation>
          </>
        </StyleProvider>
      </ThemeProvider>
    </Provider>
  );
};
export default RootContainer;
