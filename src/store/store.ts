import { configureStore } from '@reduxjs/toolkit';
import { scientechApi } from './services/scientech';
import userReducer from './reducers/user';

const reducer = {
  user: userReducer,
  [scientechApi.reducerPath]: scientechApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(scientechApi.middleware),
  devTools: process.env.NODE_ENV !== 'production' ? true : false,
});

export default store;
