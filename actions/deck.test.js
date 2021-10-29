import {
    RECEIVE_DECKS,
    RECEIVE_DECK,
    ADD_DECK,
    REMOVE_DECK,
    ADD_CARD,
    REMOVE_CARD
  } from "./constants";
  import { receiveDecks, receiveDeck, addDeck, removeDeck, addCard, removeCard } from "./decks";
  
  describe("decks", () => {
    const TITLE = "React";
    const decks = {
      React: {
        title: TITLE,
        questions: []
      }
    };
  
    it("creates an action to receive decks", () => {
      const action = { type: RECEIVE_DECKS, decks };
      expect(receiveDecks(decks)).toEqual(action);
    });
  
    it("creates an action to get a specific deck", () => {
      const deck = decks[TITLE];
      const action = { type: RECEIVE_DECK, deck };
      expect(receiveDeck(deck)).toEqual(action);
    });
  
    it("creates an action to add a deck", () => {
      const title = TITLE;
      const action = { type: ADD_DECK, title };
      expect(addDeck(title)).toEqual(action);
    });
  
    it("creates an action to remove a deck", () => {
      const title = TITLE;
      const action = { type: REMOVE_DECK, title };
      expect(removeDeck(title)).toEqual(action);
    });
  
    it("creates an action to add a card to a deck", () => {
      const card = {
        question: "A",
        answer: "B"
      };
  
      const action = { type: ADD_CARD, card };
      expect(addCard(card)).toEqual(action);
    });
  
    it("creates an action to remove a card from a deck", () => {
      const deckQuestion = { question: "A", name: "React" };
      const action = { type: REMOVE_CARD, deckQuestion };
      expect(removeCard(deckQuestion)).toEqual(action);
    });
  });