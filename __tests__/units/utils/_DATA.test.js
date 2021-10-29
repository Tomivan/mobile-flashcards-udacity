import * as api from "./../../../utils/_DATA";

const expected = {
  title: "React",
  questions: [
    {
      question: "What is React?",
      answer: "A library for managing user interfaces"
    },
    {
      question: "Where do you make Ajax requests in React?",
      answer: "The componentDidMount lifecycle event"
    }
  ]
};

describe("api", () => {
  test("should return all decks", () => {
    return api._getDecks().then(data => {
      expect(data).not.toBeNull();
      expect(typeof data).toBe("object");
      expect(data).toHaveProperty("React");
    });
  });

  test("should return a deck", () => {
    return api._getDeckById("React").then(data => {
      expect(data).toEqual(expected);
    });
  });

  test("should save a deck", () => {
    return api._saveDeck("Jest").then(data => {
      expect(data).toHaveProperty("title");
      expect(data).toHaveProperty("questions");
      expect(data.questions.length).toBe(0);
    });
  });

  test("should delete a deck", () => {
    return api._deleteDeck("Jest").then(data => {
      expect(data).not.toHaveProperty("Jest");
    });
  });

  test("should add a card to the deck", () => {
    const question = { question: "Is React written in Java?", answer: "No" };
    return api._addCard(question, "React").then(data => {
      expect(data.questions.length).toBe(3);
    });
  });

  test("should delete a card from the deck", () => {
    return api._deleteCard("Is React written in Java?", "React").then(data => {
      expect(data.questions.length).toBe(2);
    });
  });
});