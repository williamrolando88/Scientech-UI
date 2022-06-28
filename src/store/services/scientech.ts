import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginInfo, Token } from './scientech';

export const scientechApi = createApi({
  reducerPath: 'scientechApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://scientech-backend.herokuapp.com/',
  }),
  endpoints: (builder) => ({
    login: builder.mutation<Token, LoginInfo>({
      query: (userInfo) => ({
        url: 'login',
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation } = scientechApi;
