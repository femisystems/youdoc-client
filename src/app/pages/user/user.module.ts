import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { HeaderModule } from '@yd-modules/header';
import { NavigationModule } from '@yd-modules/navigation';

@NgModule({
  declarations: [UserComponent],
  imports: [
    UserRoutingModule,
    CommonModule,
    NavigationModule,
    HeaderModule
  ],
  exports: [UserRoutingModule]
})
export class UserModule { }
