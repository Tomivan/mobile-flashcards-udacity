import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { handleInitialData } from "./../actions/decks";
import DeckItem from "./../components/DeckItem";
import Header from "./../components/Header";

class Decks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  handleNav = deck => {
    this.props.navigation.navigate("Deck", { deckId: deck.title });
  };

  render() {
    const { decks } = this.props;
    if (Object.keys(decks).length === 0) {
      return (
        <View>
          <Header title={"Mobile Flashcards"} />
          <View style={styles.container}>
            <Text style={styles.textOnly}>
              You have no decks, please add a deck to get started.
            </Text>
          </View>
        </View>
      );
    }

    return (
      <ScrollView>
        <View>
          <Header title={"Mobile Flashcards"} />
          <View style={styles.container}>
            {Object.keys(decks).map(deck => (
              <View key={deck}>
                <DeckItem deck={decks[deck]} toDeck={this.handleNav} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 15
  },
  textOnly: {
    textAlign: "center",
    marginTop: 25,
    fontSize: 20
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Decks);