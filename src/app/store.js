import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import { httpSlice } from '../features/http/httpSlice'


export function makeStore() {
  return configureStore({
    reducer: { 
      counter: counterReducer,
      [httpSlice.reducerPath]: httpSlice.reducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(httpSlice.middleware)
  })
}

const store = makeStore()

export default store
