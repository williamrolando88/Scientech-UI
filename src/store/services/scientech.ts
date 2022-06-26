import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserInfo } from './scientechInterface';

export const scientechApi = createApi({
  reducerPath: 'scientechApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://scientech-backend.herokuapp.com/',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo: UserInfo) => ({
        url: 'login',
        method: 'POST',
        body: userInfo,
      }),
    }),
  }),
});

/* 
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

*/
