import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { authGuard } from '../guards/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './maintenance/users/users.component';
import { HospitalsComponent } from './maintenance/hospitals/hospitals.component';
import { DoctorsComponent } from './maintenance/doctors/doctors.component';
import { DoctorComponent } from './maintenance/doctors/doctor.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
      {
        path: 'progress',
        component: ProgressComponent,
        data: { title: 'Progress' },
      },
      {
        path: 'grafica1',
        component: Grafica1Component,
        data: { title: 'Graph' },
      },
      {
        path: 'account-settings',
        component: AccountSettingsComponent,
        data: { title: 'Settings' },
      },
      {
        path: 'promises',
        component: PromisesComponent,
        data: { title: 'Promises' },
      },
      { path: 'rxjs', component: RxjsComponent, data: { title: 'Rxjs' } },
      {
        path: 'profile',
        component: ProfileComponent,
        data: { title: 'User Profile' },
      },

      // Maintenance
      {
        path: 'users',
        component: UsersComponent,
        data: { title: 'Application User' },
      },
      {
        path: 'hospitals',
        component: HospitalsComponent,
        data: { title: 'Application Hospital' },
      },
      {
        path: 'doctors',
        component: DoctorsComponent,
        data: { title: 'Application Doctor' },
      },
      {
        path: 'doctor/:id',
        component: DoctorComponent,
        data: { title: 'Application Doctor' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
