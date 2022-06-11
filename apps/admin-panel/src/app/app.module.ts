import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AdminPanelShellModule,
  adminPanelShellRoutes,
} from '@lfl/admin-panel/shell';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '', children: adminPanelShellRoutes }], {
      initialNavigation: 'enabledBlocking',
    }),
    BrowserAnimationsModule,
    AdminPanelShellModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
