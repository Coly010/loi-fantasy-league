import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

export const adminPanelShellRoutes: Route[] = [];

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
          { path: '', pathMatch: 'full', redirectTo: '/login' },
        ],
      },
    ]),
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class AdminPanelShellModule {}
