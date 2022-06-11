import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'lfl-shell',
  template: `
    <div class="container" [class.is-mobile]="mobileQuery.matches">
      <mat-toolbar color="accent" class="toolbar"
        ><span>LOI Fantasy League - Admin Panel</span></mat-toolbar
      >
      <mat-sidenav-container
        class="sidenav-container"
        [style.marginTop.px]="mobileQuery.matches ? 56 : 0"
      >
        <mat-sidenav
          [mode]="mobileQuery.matches ? 'over' : 'side'"
          [fixedInViewport]="mobileQuery.matches"
          fixedTopGap="56"
        ></mat-sidenav>
        <router-outlet></router-outlet>
      </mat-sidenav-container>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .sidenav-container {
        flex: 1;
      }

      .is-mobile .toolbar {
        position: fixed;
        /* Make sure the toolbar will stay on top of the content as it scrolls past. */
        z-index: 2;
      }

      .is-mobile .sidenav-container {
        flex: 1 0 auto;
      }
    `,
  ],
})
export class ShellComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
