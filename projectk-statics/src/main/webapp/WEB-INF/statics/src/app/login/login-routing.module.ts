import { NgModule } from '@angular/core';
import { SignInComponent } from "../login/sign-in/sign-in.component";
import { SignUpComponent } from "../login/sign-up/sign-up.component";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: '**',
        component: SignInComponent
      }
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
