import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from "../dashboard/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      {
        path: 'admin',
        component: AdminDashboardComponent
      },
      {
        path: '**',
        component: AdminDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
