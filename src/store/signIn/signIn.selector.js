import { createSelector } from 'reselect';

export const loginUserSelector = createSelector(
    (state) => state,
    (state) => state.loginUser,
);