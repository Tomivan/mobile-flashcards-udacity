import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import { connect } from "react-redux";

import { handleAddCard } from "./../actions/decks";
import HeaderStyle from "./../components/HeaderStyle";
import { secondaryLight, std, standout, standoutLight } from "../styles/colors";

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    questionInvalid: false,
    answerInvalid: false
  };

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("title");
    const style = HeaderStyle(`Add Card to ${title}`);
    return style;
  };

  onBlur = () => {
    Keyboard.dismiss();
  };

  addCard = () => {
    // TODO: Add validation for empty fields...
    const { dispatch } = this.props;
    const title = this.props.navigation.getParam("title");
    const { question, answer } = this.state;

    if (question.replace(" ", "") === "") {
      this.setState({ invalidQuestion: true });
      return;
    }

    if (answer.replace(" ", "") === "") {
      this.setState({ invalidAnswer: true });
      return;
    }

    dispatch(handleAddCard({ question, answer, name: title }));
    Keyboard.dismiss();
    this.setState({ question: "", answer: "", invalidQuestion: false, invalidAnswer: false });
    this.props.navigation.goBack();
  };

  render() {
    const { question, answer } = this.state;
    return (
      <ScrollView>
        <View>
          <TextInput
            style={[styles.input, this.state.invalidQuestion ? styles.invalid : styles.valid]}
            placeholder="Enter question"
            value={question}
            onChangeText={question => {
              question.replace(" ", "") === ""
                ? this.setState({ question, invalidQuestion: true })
                : this.setState({ question, invalidQuestion: false });
            }}
            onBlur={this.onBlur}
          ></TextInput>
          <TextInput
            style={[styles.input, this.state.invalidAnswer ? styles.invalid : styles.valid]}
            placeholder="Enter answer"
            value={answer}
            onChangeText={answer => {
              answer.replace(" ", "") === ""
                ? this.setState({ answer, invalidAnswer: true })
                : this.setState({ answer, invalidAnswer: false });
            }}
            onBlur={this.onBlur}
          ></TextInput>
          <TouchableOpacity onPress={this.addCard} style={styles.btn}>
            <Text style={styles.btnText}>Add Card</Text>
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

export default connect()(AddCard);