import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientHomeComponent } from './client-home/client-home.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [ClientCreateComponent, ClientHomeComponent]
})
export class ClientModule { }
