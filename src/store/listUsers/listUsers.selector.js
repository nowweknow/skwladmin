import { createSelector } from 'reselect';

export const listOfUsersSelector = createSelector(
    (state) => state,
    (state) => state.listOfUsers,
);
