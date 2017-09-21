import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  TextInput
} from "react-native";
import { CheckBox } from "react-native-elements";

export default class NoteItem extends Component {
  constructor(props) {
    super(props);
  }

  onPressDone = index => {
    //alert(index);
    this.props.onPressDone(index);
  };
  render() {
    const { text, selected } = this.props.item;
    console.log(this.props.item);
    return (
      <View
        ref={"list" + this.props.id}
        key={this.props.id}
        style={[
          styles.listContainer,
          { opacity: this.props.item.selected ? 0.5 : 1 }
        ]}
      >
        <TouchableHighlight
          underlayColor="transparent"
          style={[
            styles.outer,
            { borderColor: this.props.item.selected ? "#000" : "#c6c6c6" }
          ]}
          onPress={index => this.onPressDone(this.props.id)}
        >
          <View
            style={
              this.props.item.selected ? (
                [styles.inner, { backgroundColor: "#fe952b" }]
              ) : null
            }
          />
        </TouchableHighlight>
        <View style={styles.input}>
          <TextInput defaultValue={text} style={styles.inputText} />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
    margin: 10
  },
  head: {
    flex: 5
  },
  count: {
    flex: 1
  },
  listContainer: {
    flexDirection: "row",
    height: 40,
    alignItems: "center"
  },
  outer: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#c6c6c6",
    width: 22,
    height: 22,
    borderRadius: 11,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowColor: "#aaa",
    shadowOpacity: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  inner: {
    width: 16,
    height: 16,
    borderRadius: 8
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
