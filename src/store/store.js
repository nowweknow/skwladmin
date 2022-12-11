import { configureStore } from '@reduxjs/toolkit';
import listOfUsers from "./listUsers/listUsers.slice";
import listOfProducts from "./listProducts/listProducts.slice";
import loginUser from "./signIn/signIn.slice";

export const store = configureStore({
    reducer: {
        listOfUsers,
        listOfProducts,
        loginUser
    },
});

export default store;