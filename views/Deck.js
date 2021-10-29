import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";

import HeaderStyle from "./../components/HeaderStyle";
import { handleRemoveDeck } from "./../actions/decks";
import {
  primary,
  secondary,
  secondaryLight,
  std,
  standout,
  standoutLight
} from "./../styles/colors";

class Deck extends Component {
  state = {};

  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam("deckId");
    const style = HeaderStyle(title);
    return style;
  };

  handleDeleteDeck = () => {
    const { deck, dispatch, navigation } = this.props;
    const { title } = deck;
    navigation.navigate("Decks");
    dispatch(handleRemoveDeck(title));
  };

  render() {
    const { deck } = this.props;
    if (deck) {
      const { title, questions } = deck;
      return (
        <View style={styles.container}>
          <Text style={styles.deckTitle}>{title}</Text>
          <Text style={styles.cardTitle}>
            {questions.length > 1 || questions.length < 1
              ? `${questions.length} Cards`
              : `${questions.length} Card`}
          </Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.navigation.navigate("AddCard", { title })}
          >
            <Text style={styles.btnText}>Add Card</Text>
          </TouchableOpacity>

          {questions.length > 0 && (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate("Quiz", { title })}
            >
              <Text style={styles.btnText}>Start Quiz</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity style={styles.btnLink} onPress={this.handleDeleteDeck}>
            <Text style={styles.btnLinkText}>Delete this Deck</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return <View></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: primary,
    marginBottom: 10,
    marginTop: 25
  },
  cardTitle: {
    fontSize: 15,
    color: secondary
  },
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
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5
  },
  btnText: {
    color: std,
    fontSize: 20,
    textAlign: "center"
  },
  btnLink: {
    padding: 15,
    marginTop: 25,
    textAlign: "center"
  },
  btnLinkText: {
    color: standout
  }
});

function mapStateToProps(decks, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    deck: decks[deckId]
  };
}

export default connect(mapStateToProps)(Deck);