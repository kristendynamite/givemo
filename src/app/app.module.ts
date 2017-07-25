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
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { AuthGuard } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { CharityFormComponent } from './charity-form/charity-form.component';
import { ModalModule } from '../../node_modules/ng2-modal';
import { ModalComponent } from './modal/modal.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SplashComponent,
    ProfileComponent,
    CharityListComponent,
    DonateComponent,
    FooterComponent,
    CharityFormComponent,
    ModalComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ModalModule
  ],
  providers: [AuthGuard, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
