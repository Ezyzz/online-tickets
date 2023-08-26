import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.modules'; 
import { RouterModule } from '@angular/router';
import { HomeComponent } from './store/home.component';
import { BookingComponent } from './store/booking.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, BookingComponent], 
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'show/:show_id',
        component: BookingComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
