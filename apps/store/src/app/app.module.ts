import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { StoreAppUiSharedModule } from '@bg-hoard/store-app/ui-shared';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    MatCardModule,
    StoreAppUiSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
