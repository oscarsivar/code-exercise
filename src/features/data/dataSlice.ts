import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { rockyObj, miroslavObj, donnyObj, mattObj } from '../../mock/data';
import { Data, Status } from '../../components/customTable.interface';

const initialState: Data[] = [ rockyObj, miroslavObj, donnyObj, mattObj].map((o, index)=>{
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