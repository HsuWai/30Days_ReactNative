import React, { Component } from "react";
import { View, Text, ScrollView, FlatList, TextInput } from "react-native";
import NoteItem from "../components/NoteItem";
import Icon from "react-native-vector-icons/Ionicons";

export default class Day20Screen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      list: [
        {
          selected: false,
          text: "day20"
        },
        {
          selected: false,
          text: "day21"
        },
        {
          selected: false,
          text: "day22"
        }
      ],
      numOfItems: 3
    };
  }

  _keyExtractor = (item, index) => index;

  renderItem(item, index) {
    return (
      <NoteItem
        item={item}
        id={index}
        onPressDone={index => this.pressDone(index)}
      />
    );
  }

  pressDone = index => {
    //console.log(this.state.list);
    const list = this.state.list;
    //console.log(list[index]);
    list[index].selected = !list[index].selected;

    var numOfItems = this.state.numOfItems;
    if (list[index].selected) {
      numOfItems = this.state.numOfItems - 1;
    } else {
      numOfItems = this.state.numOfItems + 1;
    }

    this.setState({
      list,
      numOfItems
    });
  };

  _addList(text) {
    //console.log(text);
    if (text !== "") {
      const list = this.state.list;
      const numOfItems = this.state.numOfItems + 1;
      list.push({
        selected: false,
        text
      });
      //this.refs.addList.setNativeProps({ text: "" });
      this.setState({
        list,
        numOfItems,
        text: ""
      });
    }
  }

  render() {
    console.log("render");
    const allList = this.state.list;
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.header}>
          <Text style={styles.head}>Development</Text>
          <Text style={styles.count}>{this.state.numOfItems}</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            refreshing={true}
            data={allList}
            extraData={this.state}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            keyExtractor={this._keyExtractor}
          />
          <View key="add" style={styles.addContainer}>
            <View>
              <Icon
                name="md-add"
                style={styles.addIcon}
                color="#c6c6c6"
                size={22}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                value={this.state.text}
                onChangeText={text => this.setState({ text })}
                onBlur={() => this._addList(this.state.text)}
                style={styles.inputText}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  header: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 20
  },
  head: {
    flex: 5,
    fontSize: 20,
    color: "#fe952b"
  },
  count: {
    flex: 1,
    fontSize: 20,
    color: "#fe952b"
  },
  listContainer: {
    flex: 1,
    borderTopColor: "#ccc",
    borderTopWidth: 1
  },
  addContainer: {
    flexDirection: "row",
    paddingLeft: 15,
    height: 45,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    flex: 1,
    height: 40
  },
  inputText: {
    flex: 1,
    height: 45,
    borderWidth: 0,
    borderColor: "#fff",
    color: "#363636"
  }
};
