import { createAction, props } from '@ngrx/store';

export const createUser = createAction(
  '[API] CREATE USER',
  props<{ emailAddress: string; password: string }>()
);

export const createUserSuccess = createAction(
  '[API] CREATE USER SUCCESS',
  props<{ id: string }>()
);
