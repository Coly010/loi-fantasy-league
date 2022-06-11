import { User } from '../user';
import { createFeature, createReducer, on } from '@ngrx/store';
import { createUserSuccess } from './auth.actions';

export interface UsersState {
  activeUser: string | null;
  users: User[];
}

const initialUsersState: UsersState = {
  activeUser: null,
  users: [],
};

export const usersFeature = createFeature({
  name: 'users',
  reducer: createReducer(
    initialUsersState,
    on(createUserSuccess, (state, { id }) => ({
      ...state,
      activeUser: id,
      users: [...state.users, { id }],
    }))
  ),
});
