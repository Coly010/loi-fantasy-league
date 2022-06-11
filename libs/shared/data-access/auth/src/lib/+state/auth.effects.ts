import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../auth.service';
import { createUser, createUserSuccess } from './auth.actions';
import { from, map, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      switchMap(({ emailAddress, password }) =>
        from(this.authService.register({ emailAddress, password }))
      ),
      map((result) => createUserSuccess({ id: result.user.uid }))
    )
  );

  navigateToDashboardOnRegisterSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createUserSuccess),
        tap(() => {
          this.router.navigateByUrl('/dashboard');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}
