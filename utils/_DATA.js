let decks = {
    React: {
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
    },
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    },
    Jest: {
      title: "Jest",
      questions: []
    }
  };
  
  export function _getDecks() {
    return new Promise((res, rej) => {
      setTimeout(() => res({ ...decks }), 1000);
    });
  }
  
  export function _getDeckById(id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(decks[id]);
      }, 1000);
    });
  }
  
  export function _saveDeck(title) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        decks = {
          ...decks,
          [title]: {
            title: title,
            questions: []
          }
        };
  
        res(decks[title]);
      }, 1000);
    });
  }
  
  export function _deleteDeck(title) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        decks[title] = {};
        delete decks[title];
        res(decks);
      }, 1000);
    });
  }
  
  export function _addCard(question, deck) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        decks = {
          ...decks,
          [deck]: {
            ...decks[deck],
            questions: decks[deck].questions.concat([question])
          }
        };
        res(decks[deck]);
      }, 1000);
    });
  }
  
  export function _deleteCard(question, deck) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        decks = {
          ...decks,
          [deck]: {
            ...decks[deck],
            questions: decks[deck].questions.filter(q => question !== q.question)
          }
        };
        res(decks[deck]);
      }, 1000);
    });
  }