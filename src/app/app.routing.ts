import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SettingsComponent } from './settings/settings.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'country-list/:count', component: CountryListComponent},
  {path: 'country-detail/:country', component: CountryDetailComponent},
  {path: 'country-maint', component: CountryMaintComponent},
  {path: 'settings', component: SettingsComponent },
  {path: '**' , component: DashboardComponent}
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class NameRoutingModule { }

// export const routedComponents = [NameComponent];
