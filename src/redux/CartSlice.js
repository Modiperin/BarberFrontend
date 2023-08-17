import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.value = action.payload
        }
    }
}
)



export const { addToCart } = cartSlice.actions
export default cartSlice.reducer