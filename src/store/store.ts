import { configureStore } from '@reduxjs/toolkit';
import { scientechApi } from './services/scientech';

const reducer = {
  [scientechApi.reducerPath]: scientechApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(scientechApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;