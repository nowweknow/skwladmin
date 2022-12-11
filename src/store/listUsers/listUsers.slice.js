import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from "service/api";

export const fetchUsers = createAsyncThunk(
    'listOfUsers/fetchUsers',
    async ({userToken}) => await api.getAllUsers(userToken),
);

export const listOfUsers = createSlice({
    name: 'listOfUsers',
    initialState: {
        users: [],
        usersIsLoading: true,
    },
    reducers: {},

    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.usersIsLoading = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.usersIsLoading = false;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.usersIsLoading = false;
        },
    },
});

export default listOfUsers.reducer;