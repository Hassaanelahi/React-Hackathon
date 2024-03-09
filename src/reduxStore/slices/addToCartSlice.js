import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // Add to cart
    Cart: [],

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            if (state.Cart.length === 0) {
                state.Cart.push(action.payload)

            } else {
                const indexNumber = state.Cart.findIndex((ind) => {
                    if (ind.id == action.payload.id) {
                        return true
                    }
                });

                if (indexNumber == -1) {
                    state.Cart.push(action.payload)
                }
            }
        },
        removeCart: (state, action) => {
            state.Cart = state.Cart.filter(
                (cartData) => cartData.id !== action.payload.id
            )
        }
    }
})




const { actions, reducer } = cartSlice;

export const { addCart, removeCart } = actions;

export default reducer;