import {
  Action,
  configureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
 
import {apiSlice} from './fetures/dogs/dogs-api-slice'
import { usrApiSlice } from './fetures/users/users-api-clice';
 
export const store = configureStore({
  reducer: {
    
    [usrApiSlice.reducerPath]:usrApiSlice.reducer,
      [apiSlice.reducerPath]:apiSlice.reducer
// This is where we add reducers.
// Since we don't have any yet, leave this empty
  },
  middleware: (getDefaultMiddleware) =>  
   getDefaultMiddleware().concat(usrApiSlice.middleware
    )
   
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;