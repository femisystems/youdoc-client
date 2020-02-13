import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
