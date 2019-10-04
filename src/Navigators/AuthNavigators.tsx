import { createStackNavigator } from "react-navigation";
import SignIn from "../Container/SignIn";
const AuthNavigators = createStackNavigator({
  SignIn: SignIn
},{
  mode:"card",
 headerMode:"none"
});
export default AuthNavigators;
