/**
 * store.ts
 *
 * This works as root reducer to retrieve data for CustomTable.tsx
 *
 * Dependencies:
 * - Reduxjs/toolkit: set store and actions
 *
 * Author: Oscar Elías
 * Date: 16-06-2024
 */

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import dataReducer from '../features/data/dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer
  }
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>