import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { StoreAppUiSharedModule } from '@bg-hoard/store-app/ui-shared';

import { AppComponent, FormatRatingPipe } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, FormatRatingPipe],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'game/:id',
          loadChildren: () =>
            import('@bg-hoard/store-app/feature-game-detail').then(
              (module) => module.StoreAppFeatureGameDetailModule
            ),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
    MatCardModule,
    StoreAppUiSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
