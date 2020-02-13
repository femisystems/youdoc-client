import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidePanelComponent, HeaderComponent } from 'src/app/components';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', component: HeaderComponent, outlet: 'header' },
  { path: '', component: SidePanelComponent, outlet: 'sidepanel' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }