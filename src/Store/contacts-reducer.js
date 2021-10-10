import { combineReducers } from 'redux';
import { ADD, REMOVE } from './types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case REMOVE:
      return state.filter(contact => payload !== contact.id);
    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
