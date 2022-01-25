import { combineReducers } from 'redux';
import types from './contacts-types';
import initialContacts from '../contacts.json';

const items = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case types.ADD:
      return {
        ...state,
        contacts: [payload, ...state.contacts],
      };

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
