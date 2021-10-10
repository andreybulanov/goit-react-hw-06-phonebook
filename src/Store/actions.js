import { ADD, REMOVE, HANDLE_FILTER } from './types';
import { v4 as uuidv4 } from 'uuid';

export const addContact = data => ({
  types: ADD,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export const removeContact = id => ({
  types: REMOVE,
  payload: id,
});

export const filterContact = value => ({
  types: HANDLE_FILTER,
  payload: value,
});
