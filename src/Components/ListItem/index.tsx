import { connectStyle } from "@shoutem/theme";
import React, { PureComponent } from "react";
import { View } from "react-native";
import {
  Avatar,
  Caption,
  Card,
  IconButton,
  Paragraph,
  Text,
  Theme,
  TouchableRipple,
  withTheme
} from "react-native-paper";
import AwsomeIcons from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Content } from "../../Shared/Core/Frameworks/Components/";
type Props = React.ComponentProps<typeof View> & {
  style?: any;
  styleName?: string;
  theme: Theme;
};
class ListItem extends PureComponent<Props> {
  render() {
    const { theme } = this.props;
    return (
      <Card
        style={{
          flexGrow: 1,
          width: "100%"
        }}
      >
        <Card.Content style={{ flexGrow: 1, padding: 5 }}>
          <Content styleName="vertical" style={{ flex: 1 }}>
            <Content styleName="horizontal v-start">
              <Avatar.Text
                size={40}
                label="SA"
                style={{ marginTop: 10 }}
              ></Avatar.Text>
              <Content
                styleName="vertical v-center sm-gutter-left sm-gutter-right"
                style={{ width: "90%" }}
              >
                <Content styleName="horizontal v-center md-gutter-horizontal">
                  <Text>muralikumarje</Text>
                  <Caption style={{ paddingHorizontal: 10 }}>
                    @muralikumarje
                  </Caption>
                </Content>
                <Content styleName="horizontal v-center sm-gutter-horizontal">
                  <Avatar.Icon
                    size={28}
                    style={{
                      backgroundColor: "transparent",
                      paddingTop: 2,
                      marginLeft: 2
                    }}
                    icon={props => (
                      <MaterialCommunityIcons
                        {...props}
                        name="clock-outline"
                        style={{ color: theme.colors.placeholder }}
                      ></MaterialCommunityIcons>
                    )}
                  >
                    {""}
                  </Avatar.Icon>
                  <Caption>September 23rd, 2019 09:07</Caption>
                </Content>
                <Paragraph style={{ marginLeft: 15 }} ellipsizeMode="tail">
                  RT @kothariabhishek: .@CNBCTV18News #PSUBanks tax paid in FY19
                  @TheOfficalSBI at 46.4% tax rate @bankofbaroda at 37.9% UCO
                  Bank
                </Paragraph>
              </Content>
            </Content>
            <Content styleName="md-gutter-vertical">
              <TouchableRipple
                rippleColor="rgba(0, 0, 0, .32)"
                style={{
                  backgroundColor: theme.colors.placeholder,
                  width: 80,
                  padding: 5,
                  marginVertical: 10
                }}
              >
                <Caption
                  style={{ textAlign: "center", color: theme.colors.surface }}
                >
                  UCO Banks
                </Caption>
              </TouchableRipple>
              <TouchableRipple
                rippleColor="rgba(0, 0, 0, .32)"
                style={{
                  backgroundColor: theme.colors.primary,
                  width: 50,
                  padding: 5
                }}
              >
                <Caption
                  style={{
                    textAlign: "center",
                    color: theme.colors.surface
                  }}
                >
                  Banks
                </Caption>
              </TouchableRipple>
            </Content>
            <Content styleName="horizontal h-end" style={{ width: "100%" }}>
              <IconButton
                icon={props => (
                  <AwsomeIcons
                    {...props}
                    name="link"
                    color={theme.colors.placeholder}
                  ></AwsomeIcons>
                )}
                size={20}
                onPress={() => console.log("Pressed")}
              />
            </Content>
          </Content>
        </Card.Content>
      </Card>
    );
  }
}
const wrappedWithTheme = withTheme(ListItem);

const wrappedStyle = connectStyle("stock.architect.ui.ListItem")(
  wrappedWithTheme
);
export { wrappedStyle as ListItem };
