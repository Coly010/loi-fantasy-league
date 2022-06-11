import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  AuthGuard,
  SharedDataAccessAuthModule,
} from '@lfl/shared/data-access/auth';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: 'login',
            loadChildren: () =>
              import('@lfl/admin-panel/login').then(
                (m) => m.AdminPanelLoginModule
              ),
          },
          {
            path: 'dashboard',
            loadChildren: () =>
              import('@lfl/admin-panel/dashboard').then(
                (m) => m.AdminPanelDashboardModule
              ),
            canActivate: [AuthGuard],
          },
          { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
        ],
      },
    ]),
    SharedDataAccessAuthModule,
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class AdminPanelShellModule {}
