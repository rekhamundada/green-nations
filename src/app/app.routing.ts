
import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SettingsComponent } from './settings/settings.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';

import { AuthUserComponent } from './auth-user/auth-user.component';
import { RegisterUserComponent } from './users/register-user/register-user.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
  {path: 'signin', component: SignInComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'authenticated', component: AuthUserComponent,
    canActivate: [ AuthGuardService],
  children: [
      {path: '',  canActivateChild: [ AuthGuardService],
        children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent },
      {path: 'country-list/:count', component: CountryListComponent},
      {path: 'country-detail/:id/:operation', component: CountryDetailComponent},
      {path: 'country-maint', component: CountryMaintComponent},
      {path: 'settings', component: SettingsComponent },
  ] }
] },
{path: '', component:  SignInComponent},
{path: '**' , component: SignInComponent}
];

