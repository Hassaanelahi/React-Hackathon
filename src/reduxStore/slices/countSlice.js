import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count : 0
}

const countSlice = createSlice({
    name : "count",
    initialState,
    reducers: {
        addCount : (state, action) => {
            state.count = ++state.count;
        }
    }
})

const {actions, reducer} = countSlice;

export const {addCount} = actions;

export default reducer;