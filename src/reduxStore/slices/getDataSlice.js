import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    // Fetch Data
    products: [],
    isLoading: false,
    isError: false,
}


const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.products = [];
            state.isError = action.payload;
        })
    }
})


export const fetchProducts = createAsyncThunk("product/fetch", async(_, { rejectWithValue }) => {
    try {
        const data = await axios.get("https://fakestoreapi.com/products");
        // console.log(data.data)
        return data.data;

    } catch (error) {
        return rejectWithValue(error.message);
    }
})



const { actions, reducer } = productSlice;



export default reducer;