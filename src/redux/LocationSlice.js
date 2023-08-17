import { createSlice } from "@reduxjs/toolkit"

const initialState={
    value:[]
}

const locationSlice=createSlice({
    name:'location',
    initialState,
    reducers:{
        addLocation:(state,action)=>{
            // action.payload.locality?.filter((e)=>e.cityId._id==action.payload.city)?.map((f)=>{
            //     state.value.push(f)
            // })
            action.payload.locality?.map((f)=>{
                state.value.push(f)
            })
            
        }
    }
})

export const {addLocation}=locationSlice.actions
export default locationSlice.reducer