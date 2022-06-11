import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lfl-login',
  template: ` <div class="w-full sm:w-1/3 mx-auto p-0 py-4 sm:p-4">
    <mat-card>
      <mat-card-content>
        <div class="flex flex-col">
          <mat-form-field appearance="outline">
            <mat-label>Email Address</mat-label>
            <input matInput placeholder="Email Address" />
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Password</mat-label>
            <input matInput type="password" placeholder="Password" />
          </mat-form-field>
          <button mat-raised-button color="primary">Login</button>
          <div class="signup-link p-2">
            <p class="text-center">
              Do not have an account? <br />
              <button mat-button color="accent" routerLink="register">
                Create an Account
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
export class LoginComponent {}
