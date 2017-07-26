import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { CharityListComponent } from './charity-list/charity-list.component';
import { CharityFormComponent } from './charity-form/charity-form.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'charity-form',
    component: CharityFormComponent
  },
  {
    path: 'charity-list',
    component: CharityListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
