import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
interface User{
  id:number;
  name: string;
  email: string;
}

export  const usrApiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/users'   
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query<Breed[], number | void>({
        query(limit = 10): string {
          return `/?limit=${limit}`;
        }
      })
    };
  }
});

export const {useFetchUsersQuery } = usrApiSlice;