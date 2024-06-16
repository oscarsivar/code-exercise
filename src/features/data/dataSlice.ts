import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { rockyObj, miroslavObj, donnyObj, mattObj } from '../../mock/data';

enum Status {
    inactive = 'Inactive',
    active = 'Active',
}

export interface DataState {
  name: string
  favoriteFood: string
  favoriteMovie: string
  status: Status
  timeStamp: string
}

const initialState: DataState[] = [ rockyObj, miroslavObj, donnyObj, mattObj].map((o)=>{
    const parseObject = {
        name: o.Name,
        favoriteFood: o['Favorite Food'],
        favoriteMovie: o['Favorite Movie'],
        status: o.Status,
        timeStamp: ''
    } as DataState;

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
    (d) => d?.filter((item) => item.status !== Status.inactive) || []
  );

export default dataSlice.reducer