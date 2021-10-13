import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import build from 'next/dist/build'
const DOGS_API_KEY='ecd689bb-5677-46e2-b17c2275e5c6'
interface Breed{
  id:string;
  name: string;
  imag: {
    url: string
  }
}

export  const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers) {
      headers.set('x-api-key', DOGS_API_KEY)
      return headers
    },
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query(limit = 10): string {
          return `/breeds?limit=${limit}`;
        }
      })
    };
  }
});

export const {useFetchBreedsQuery } = apiSlice;