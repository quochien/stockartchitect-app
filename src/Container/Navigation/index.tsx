import * as _ from "lodash";
import React, { Component } from "react";
import { BackHandler, Platform } from "react-native";
import { NavigationState } from "react-navigation";
import { connect } from "react-redux";
import { NavigationWithState } from "../../Navigators";

interface Props {
  dispatch: (payload: any) => void;
  navigation: NavigationState;
}
class Navigation extends Component<Props> {
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps.navigation, this.props.navigation);
  }
  componentWillMount() {
    if (Platform.OS === "ios") return;
    BackHandler.addEventListener("hardwareBackPress", () => {
      const { dispatch, navigation } = this.props;
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (
        navigation.routes.length === 1 &&
        navigation.routes[0].routeName === "SplashScreen"
      ) {
        return false;
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: "Navigation/BACK" });
      return true;
    });
  }
  componentWillUnmount() {
    if (Platform.OS === "ios") return;
    BackHandler.removeEventListener("hardwareBackPress", () => {});
  }
  render() {
    const { navigation, dispatch, ...rest } = this.props;
    return (
      <NavigationWithState
        {...rest}
        // navigation={{ state: navigation, dispatch: dispatch }}
        state={navigation}
        dispatch={dispatch}
        // screenProps={{ ...rest }}
        // virtual
      />
    );
  }
}
const mapStateToProps = state => ({ navigation: state.nav });
export default connect(mapStateToProps)(Navigation);
