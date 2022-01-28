import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import types from './contacts-types';

export const AddContact = createAction(types.ADD, ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
}));

export const deleteContacts = createAction(types.DELETE);

export const changeFilter = createAction(types.CHANGE_FILTER);
