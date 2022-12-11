import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import api from "service/api";

export const loginQuery = createAsyncThunk(
    'loginUser/loginQuery',
    async (values) => await api.signIn(values),
);

export const loginUser = createSlice({
    name: 'loginUser',
    initialState: {
        userIsLoading: true,
        userToken: JSON.parse(localStorage.getItem('token')),
        usersError: ""
    },

    reducers: {
        logout(state) {
            state.userToken = '';
            localStorage.clear();
        },
        clearError(state) {
            state.usersError = "";
        }
    },

    extraReducers: {
        [loginQuery.pending]: (state, action) => {
            state.userIsLoading = true;
        },
        [loginQuery.fulfilled]: (state, action) => {
            state.userToken = action.payload;
            localStorage.setItem('token', JSON.stringify(state.userToken));
            state.userIsLoading = false;
        },
        [loginQuery.rejected]: (state, action) => {
            state.userIsLoading = false;
            state.usersError = "Please check your login or password"
        },
    },
});

export const {logout, clearError} = loginUser.actions;

export default loginUser.reducer;