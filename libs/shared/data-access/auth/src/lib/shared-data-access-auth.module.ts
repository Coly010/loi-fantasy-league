import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { usersFeature } from './+state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './+state/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeature),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class SharedDataAccessAuthModule {}
