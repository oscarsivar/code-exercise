/**
 * dataSlice.tsx
 *
 * this slice create an initial state with the input provide for code exercise also filter the data using 
 * status in order to show just Active objects
 *
 * Actions:
 * - updateTimestamp: Dispatches an action to update the timestamp when change happens.
 * - createSelector: filter data to just show Active objects
 *
 * Dependencies:
 * - React
 * - RootState: For connecting the component to the Redux store.
 * - Redux actions: updateTimestamp action creator.
 *
 *
 * Author: Oscar Elías
 * Date: 16-06-2024
 */

import { createSlice, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { rockyObj, miroslavObj, donnyObj, mattObj, oscarObj } from '../../mock/data';
import { Data, Status } from '../../components/customTable.interface';

const initialState: Data[] = [ oscarObj, rockyObj, miroslavObj, donnyObj, mattObj].map((o, index)=>{
    const parseObject = {
        id: index+1,
        name: o.Name,
        favoriteFood: o['Favorite Food'],
        favoriteMovie: o['Favorite Movie'],
        status: o.Status,
        timeStamp: new Date().toISOString()
    } as Data;

    return parseObject
})

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateTimeStamp: (state) => {
      return state.map((specs)=>({
        ...specs,
        timeStamp: new Date().toISOString()
      }))
    }
  },
})

export const { updateTimeStamp } = dataSlice.actions

const selectObjects = (state: RootState) => state?.data || [];

export const dataObjects = createSelector(
    [selectObjects],
    (d) => 
        d?.filter((item) => item.status !== Status.inactive)
        || []
  );

export default dataSlice.reducer