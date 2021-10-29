import reducer from "./decks";
import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  REMOVE_CARD
} from "../actions/constants";

describe("decks reducer", () => {
  const decks = {};
  const title = "React";
  const decksPopulated = {
    [title]: {
      title: title,
      questions: []
    }
  };

  describe("when initialising", () => {
    const decks = {};

    it("initialises the decks", () => {
      expect(reducer(undefined, { type: RECEIVE_DECKS, decks })).toEqual(decks);
    });
  });

  it("creates a deck", () => {
    expect(reducer(decks, { type: ADD_DECK, title })).toEqual({
      React: {
        title: title,
        questions: []
      }
    });
  });

  it("removes a deck", () => {
    expect(reducer(decksPopulated, { type: REMOVE_DECK, title })).toEqual(decks);
  });

  describe("cards in a deck", () => {
    it("adds a card to a deck", () => {
      const card = { question: "A", answer: "B", name: "React" };
      const { question, answer } = card;
      expect(reducer(decksPopulated, { type: ADD_CARD, card })).toEqual({
        React: {
          title: "React",
          questions: [{ question, answer }]
        }
      });
    });

    it("removes a card from a deck", () => {
      const initial = {
        React: {
          title: title,
          questions: [{ question: "A", answer: "B" }]
        }
      };
      const deckQuestion = { question: "A", name: "React" };
      expect(reducer(initial, { type: REMOVE_CARD, deckQuestion })).toEqual({
        React: {
          title: "React",
          questions: []
        }
      });
    });
  });
});
