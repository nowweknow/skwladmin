import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "service/api";

export const fetchProducts = createAsyncThunk(
    'listOfProducts/fetchProducts',
    async ({userToken}) => await api.getAllProducts(userToken),
);

export const listOfProducts = createSlice({
    name: 'listOfProducts',
    initialState: {
        products: [],
        productsIsLoading: true,
    },
    reducers: {},

    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.productsIsLoading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.productsIsLoading = false;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.productsIsLoading = false;
        },
    },
});

export default listOfProducts.reducer;