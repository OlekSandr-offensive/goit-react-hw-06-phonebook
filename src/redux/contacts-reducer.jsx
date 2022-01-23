import { combineReducers } from 'redux';

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

const items = (state = [], action) => {
  return state;
};

const filter = (state = [], action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
