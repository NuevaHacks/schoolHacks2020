import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwitterComponent } from './twitter/twitter.component';
import { timer } from 'rxjs';
import { TimerService } from './timer.service';
import { TimerComponent } from './timer/timer.component'

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
