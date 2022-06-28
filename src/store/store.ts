import { configureStore } from '@reduxjs/toolkit';
import { scientechApi } from './services/scientech';
import userReducer from './reducers/user';
import logger from 'redux-logger';

const reducer = {
  userReducer,
  [scientechApi.reducerPath]: scientechApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger).concat(scientechApi.middleware),
  devTools: process.env.NODE_ENV !== 'production' ? true : false,
});

export default store;
