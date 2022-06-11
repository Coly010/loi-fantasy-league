import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './auth.reducer';

export const selectFeature = createFeatureSelector<UsersState>('users');

export const selectActiveUser = createSelector(
  selectFeature,
  (state) => state.activeUser
);
export const selectIsLoggedIn = createSelector(selectFeature, (state) =>
  Boolean(state.activeUser)
);
