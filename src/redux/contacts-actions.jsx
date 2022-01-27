import shortid from 'shortid';
import types from './contacts-types';

export const AddContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

export const deleteContacts = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

// export default { AddContact, deleteContacts };
