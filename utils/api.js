import { AsyncStorage } from "react-native";

export const FL_KEY = "UND_NCP_MobileFlashcards";

function setStore() {
  let decks = {};
  AsyncStorage.setItem(FL_KEY, JSON.stringify(decks));
  return decks;
}

function getStore(results) {
  return results === null ? setStore() : results;
}

export function _getDecks() {
  return AsyncStorage.getItem(FL_KEY).then(getStore);
}

export function _getDeckByTitle(title) {
  return AsyncStorage.getItem(FL_KEY).then(results => results[title]);
}

export function _saveDeck(title) {
  return AsyncStorage.mergeItem(
    FL_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        questions: []
      }
    })
  );
}

export function _deleteDeck(title) {
  return AsyncStorage.getItem(FL_KEY).then(res => {
    const data = JSON.parse(res);
    data[title] = undefined;
    delete data[title];
    AsyncStorage.setItem(FL_KEY, JSON.stringify(data));
  });
}

export function _addCard({ question, answer, name }) {
  return AsyncStorage.getItem(FL_KEY).then(results => {
    let decks = { ...JSON.parse(results) };
    decks = {
      ...decks,
      [name]: {
        ...decks[name],
        questions: decks[name].questions.concat([{ question, answer }])
      }
    };
    AsyncStorage.mergeItem(FL_KEY, JSON.stringify(decks));
  });
}