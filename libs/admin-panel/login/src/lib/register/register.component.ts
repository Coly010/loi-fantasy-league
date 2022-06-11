import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { createUser } from '@lfl/shared/data-access/auth';

@Component({
  selector: 'lfl-register',
  template: ` <div class="w-full sm:w-1/3 mx-auto p-0 py-4 sm:p-4">
    <mat-card>
      <mat-card-content>
        <div class="flex flex-col">
          <mat-form-field appearance="outline">
            <mat-label>Email Address</mat-label>
            <input
              matInput
              [(ngModel)]="emailAddress"
              placeholder="Email Address"
            />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Password</mat-label>
            <input
              matInput
              [(ngModel)]="password"
              type="password"
              placeholder="Password"
            />
          </mat-form-field>
          <button mat-raised-button color="primary" (click)="register()">
            Sign Up
          </button>
          <div class="signup-link p-2">
            <p class="text-center">
              Have an account? <br />
              <button mat-button color="accent" routerLink="login">
                Login
              </button>
            </p>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  </div>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  emailAddress: string | undefined;
  password: string | undefined;

  constructor(private store: Store) {}

  register() {
    if (this.emailAddress && this.password) {
      this.store.dispatch(
        createUser({ emailAddress: this.emailAddress, password: this.password })
      );
    }
  }
}
