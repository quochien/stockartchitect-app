import { createSwitchNavigator } from "react-navigation";
import Home from "../Container/Home/";
import AuthNavigators from "./AuthNavigators";
const RootStack = createSwitchNavigator({
  AuthorizationStack: AuthNavigators,
  Home
});
export default RootStack;
