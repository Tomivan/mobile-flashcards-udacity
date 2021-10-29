import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

import { handleAddDeck } from "./../actions/decks";
import Header from "./../components/Header";
import { secondaryLight, std, standout, standoutLight } from "../styles/colors";

class AddDeck extends Component {
  state = {
    title: "",
    invalid: false
  };

  handleChange = title => {
    if (title !== "") {
      this.setState({ invalid: false });
    }
    this.setState({ title });
  };

  onBlur = () => {
    Keyboard.dismiss();
  };

  addDeck = () => {
    const { dispatch } = this.props;

    if (this.state.title.replace(" ", "") === "") {
      this.setState({ invalid: true });
      return;
    }

    const title = this.state.title;

    dispatch(handleAddDeck(title));
    Keyboard.dismiss();
    this.setState({ title: "", invalid: false });
    this.toHome();
  };

  toHome = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { title } = this.state;
    return (
      <ScrollView>
        <View>
          <Header title="Add Deck"></Header>
          <TextInput
            style={[styles.input, this.state.invalid ? styles.invalid : styles.valid]}
            placeholder="Enter deck title"
            value={title}
            onChangeText={this.handleChange}
            onBlur={() => Keyboard.dismiss}
          ></TextInput>
          <TouchableOpacity onPress={this.addDeck} style={styles.btn}>
            <Text style={styles.btnText}>Add Deck</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: secondaryLight,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  btn: {
    borderWidth: 1,
    borderColor: standoutLight,
    backgroundColor: standout,
    padding: 15,
    margin: 25,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },
  btnText: {
    color: std,
    fontSize: 20,
    textAlign: "center"
  },
  invalid: {
    borderBottomColor: "tomato"
  },
  valid: {
    borderBottomColor: secondaryLight
  }
});

export default connect()(AddDeck);