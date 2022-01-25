import shortid from 'shortid';
import types from './contacts-types';

const AddContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

export default { AddContact };
