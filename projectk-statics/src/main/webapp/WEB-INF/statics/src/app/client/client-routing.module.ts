import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientCreateComponent } from '../client/client-create/client-create.component';
import { ClientHomeComponent } from "../client/client-home/client-home.component";

const routes: Routes = [
  {
    path: 'client',
    children: [
      {
        path: 'create',
        component: ClientCreateComponent
      },
      {
        path: '**',
        component: ClientHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
