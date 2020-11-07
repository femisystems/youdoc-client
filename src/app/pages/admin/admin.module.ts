import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderModule } from '@yd-modules/header';
import { NavigationModule } from '@yd-modules/navigation';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    AdminRoutingModule,
    CommonModule,
    NavigationModule,
    HeaderModule
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
