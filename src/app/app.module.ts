import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { routes } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FwModule } from '../fw/fw.module';
import { FrameworkBodyComponent } from '../fw/framework-body/framework-body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { AuthUserComponent } from './auth-user/auth-user.component';

import { RegisterUserComponent } from './users/register-user/register-user.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { UserService } from './services/user.service';
import { UserApi } from './users/user.api';
import { AuthGuardService } from './services/auth-guard.service';
import { AppDataService } from './services/app-data.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthUserComponent,
    SignInComponent,
    RegisterUserComponent,

  ],
  imports: [
    BrowserModule,
    FwModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    AuthGuardService,
    AppDataService,
    //  UserService
    // provides token
    {provide: UserService , useClass: UserService },
    {provide: UserApi, useExisting: UserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
