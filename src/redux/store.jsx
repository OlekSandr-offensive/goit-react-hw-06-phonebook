import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts-reducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
