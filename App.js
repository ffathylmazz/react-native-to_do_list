import React, { Component } from "react";
import { Platform, TextInput, Text, View, FlatList } from "react-native";
import MyButton from "./button";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.state = {
      toDos: [],
      todo: ""
    };
  }

  addItem() {
    this.setState(prevState => ({
      toDos: [...prevState.toDos, this.state.todo]
    }));
  }
  // _renderItem = ({ item }) => <Text>Item: {item}</Text>;

  _renderItem({ item }) {
    return (
      <View
        style={{
          backgroundColor: "gray",
          margin: 8,
          height: 100,
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>{item}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, marginTop: Platform.OS == "ios" ? 21 : 0 }}>
        <View style={{ backgroundColor: "gray", height: 200, flexDirection: "row", padding: 8 }}>
          <View
            style={{
              backgroundColor: "blue",
              flex: 4,
              marginRight: 8,
              borderRadius: 16,
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <TextInput
              value={this.state.todo}
              onChangeText={data => this.setState({ todo: data })}
              placeholder={"To do!"}
              style={{ height: 44, backgroundColor: "white", margin: 8, borderRadius: 16, paddingLeft: 12 }}
            />
          </View>
          <View style={{ backgroundColor: "red", flex: 1, borderRadius: 16 }}>
            <MyButton onPress={() => this.addItem()} text={"ADD"} />
          </View>
        </View>

        <FlatList data={this.state.toDos} renderItem={this._renderItem} />
      </View>
    );
  }
}
