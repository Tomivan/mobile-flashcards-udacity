import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { primary, secondary, secondaryLight } from "../styles/colors";

class DeckItem extends Component {
  state = {};

  handlePress = () => {
    const { deck } = this.props;
    this.props.toDeck(deck);
  };

  render() {
    const { deck } = this.props;
    const { questions, title } = deck;

    return (
      <TouchableOpacity onPress={this.handlePress} style={styles.deckItem}>
        <Text style={styles.deckTitle}>{title}</Text>
        <Text style={styles.cardTitle}>
          {questions.length > 1 || questions.length < 1
            ? `${questions.length} Cards`
            : `${questions.length} Card`}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  deckItem: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: secondaryLight,
    borderBottomWidth: 1,
    borderStyle: "solid"
  },
  deckTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: primary,
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 15,
    color: secondary
  }
});

export default DeckItem;