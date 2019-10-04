// import { Content } from "@Components";
import _ from "lodash";
import React, { Component } from "react";
import { Button, Headline, Subheading, TextInput } from "react-native-paper";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState
} from "react-navigation";
import { Content } from "../../Shared/Core/Frameworks/Components/";
import { Utils } from "../../Shared/Core/Utils/";
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface State {
  username: string;
  password: string;
  valid: boolean;
}
export default class SignIn extends Component<Props, State> {
  state: State = {
    username: "",
    password: "",
    valid: false
  };
  constructor(props) {
    super(props);
    this.onPressSubmit = this.onPressSubmit.bind(this);
    // this.onChangeText = this.onChangeText.bind(this);
  }
  onPressSubmit() {
    console.info(this.props);
    const { navigation } = this.props;
    const { username = "", password } = this.state;
    //Check Email Or Username.
    if (Utils.isEmail(username) || username.trim.length >= 8) {
      //Set Valid And Loading.
      const { valid } = Utils.checkStrongPassword(password);
      if (!valid) {
        alert("Please check your password");
        return;
      }
      //Navigate To Home Page.
      navigation.navigate({ routeName: "Home" });
    } else {
      alert("Please check username");
      //Set Valid false
    }
    this.props.navigation;
  }
  onChangeText = key => value => {
    const nextState: any = _.pick(this.state, [key]);
    nextState[key] = value;
    this.setState({ ...nextState });
  };
  render() {
    const { username, password, valid } = this.state;
    return (
      <Content
        styleName="vertical v-center md-gutter-horizontal space-round"
        style={{ flex: 1 }}
      >
        <Content>
          <Headline>Stock Architect</Headline>
          <Subheading>SIGN IN OR SIGN UP</Subheading>
        </Content>
        <Content>
          <TextInput
            mode="outlined"
            label="Email / Username"
            style={{ marginTop: 20 }}
            value={username}
            onChangeText={this.onChangeText("username")}
          ></TextInput>
          <TextInput
            secureTextEntry
            mode="outlined"
            label="Password"
            style={{ marginVertical: 20 }}
            value={password}
            onChangeText={this.onChangeText("password")}
          ></TextInput>
          <Button mode="contained" compact onPress={this.onPressSubmit} dark>
            Submit
          </Button>
        </Content>
      </Content>
    );
  }
}
// export default SignIn;
