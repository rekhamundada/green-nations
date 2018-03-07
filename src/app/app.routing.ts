import { NgModule } from '@angular/core';
import { Routes} from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  {path: '', component: DashboardComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'settings', component: SettingsComponent },
  {path: '**' , component: DashboardComponent}
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class NameRoutingModule { }

// export const routedComponents = [NameComponent];
