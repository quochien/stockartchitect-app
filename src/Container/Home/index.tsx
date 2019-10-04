import React, { Component } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { ListItem } from "../../Components/ListItem";
const data = new Array(50).fill({});
export default class Home extends Component {
  renderItem({ item, index }) {
    return <ListItem key={`${index}`}></ListItem>;
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, marginVertical: 20 }}>
        <FlatList data={data} renderItem={this.renderItem}></FlatList>
      </SafeAreaView>
    );
  }
}
