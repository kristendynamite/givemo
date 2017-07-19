import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { SplashComponent } from './splash/splash.component';
import { ProfileComponent } from './profile/profile.component';
import { CharityListComponent } from './charity-list/charity-list.component';
import { DonateComponent } from './donate/donate.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SplashComponent,
    ProfileComponent,
    CharityListComponent,
    DonateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
