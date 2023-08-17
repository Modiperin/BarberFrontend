import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[]
}

const citySlice=createSlice({
    name:'city',
    initialState,
    reducers:{
        addCity:(state,action)=>{
            action.payload?.map((e)=>{
                state.value.push(e)
            })
        }
    }
})

export const {addCity}=citySlice.actions
export default citySlice.reducer