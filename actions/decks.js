import {
    RECEIVE_DECKS,
    RECEIVE_DECK,
    ADD_DECK,
    REMOVE_DECK,
    ADD_CARD,
    REMOVE_CARD
  } from "./constants";
  
  // import { _getDecks } from "./../utils/_DATA";
  import { _getDecks, _saveDeck, _getDeckByTitle, _deleteDeck, _addCard } from "./../utils/api";
  
  export function receiveDecks(decks) {
    return {
      type: RECEIVE_DECKS,
      decks
    };
  }
  
  export function receiveDeck(deck) {
    return {
      type: RECEIVE_DECK,
      deck
    };
  }
  
  export function addDeck(title) {
    return {
      type: ADD_DECK,
      title
    };
  }
  export function removeDeck(title) {
    return {
      type: REMOVE_DECK,
      title
    };
  }
  
  export function addCard(card) {
    return {
      type: ADD_CARD,
      card
    };
  }
  
  export function removeCard(deckQuestion) {
    return {
      type: REMOVE_CARD,
      deckQuestion
    };
  }
  
  export function handleInitialData() {
    return dispatch => {
      return _getDecks()
        .then(data => {
          dispatch(receiveDecks(JSON.parse(data)));
        })
        .catch(e => {
          console.error(e);
        });
    };
  }
  
  export function handleAddDeck(title) {
    return dispatch => {
      return _saveDeck(title)
        .then(() => {
          dispatch(addDeck(title));
        })
        .catch(e => {
          console.error(e);
        });
    };
  }
  
  export function handleReceiveDeck(title) {
    return dispatch => {
      return _getDeckByTitle(title)
        .then(data => {
          dispatch(receiveDeck(JSON.parse(data)));
        })
        .catch(e => console.error(e));
    };
  }
  
  export function handleRemoveDeck(title) {
    return dispatch => {
      return _deleteDeck(title)
        .then(() => {
          dispatch(removeDeck(title));
        })
        .catch(e => console.error(e));
    };
  }
  
  export function handleAddCard(card) {
    return dispatch => {
      return _addCard(card)
        .then(() => {
          dispatch(addCard(card));
        })
        .catch(e => console.error(e));
    };
  }
  