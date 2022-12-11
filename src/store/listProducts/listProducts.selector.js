import { createSelector } from 'reselect';

export const listOfProductsSelector = createSelector(
    (state) => state,
    (state) => state.listOfProducts,
);
