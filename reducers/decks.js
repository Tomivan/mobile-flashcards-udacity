import omit from "lodash.omit";
import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD,
  REMOVE_CARD
} from "../actions/constants";

const decks = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      const { title } = action;
      return {
        ...state,
        [title]: {
          title: title,
          questions: []
        }
      };
    case REMOVE_DECK:
      const { title: deckTitle } = action;
      const newState = omit(state, deckTitle);
      return newState;
    case ADD_CARD:
      const { card } = action;
      const { question, answer, name } = card;
      return {
        ...state,
        [name]: {
          ...state[name],
          questions: state[name].questions.concat([{ question, answer }])
        }
      };
    case REMOVE_CARD:
      const { deckQuestion } = action;
      const { question: qst, name: nm } = deckQuestion;
      return {
        ...state,
        [nm]: {
          ...state[nm],
          questions: state[nm].questions.filter(q => q.question !== qst)
        }
      };
    default:
      return state;
  }
};

export default decks;