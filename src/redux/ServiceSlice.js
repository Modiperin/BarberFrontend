import { createSlice } from "@reduxjs/toolkit";

const serviceInitial = {
    value: []
}

const serviceSlice = createSlice({
    name: 'service',
    initialState: serviceInitial,
    reducers: {
        addToService: (state, action) => {
            var check=state.value?.findIndex((e)=>e._id===action.payload._id)
            if(check==-1)
                state.value.push(action.payload); // Corrected this line
        },
        removeFromService:(state,action)=>{
            let index=state.value?.findIndex((e)=>e._id==action.payload)
            console.log(index)
            state.value.splice(index,1)
        }
    }
});

export const { addToService,removeFromService } = serviceSlice.actions;
export default serviceSlice.reducer

