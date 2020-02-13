import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentListComponent, DocumentFormComponent, HeaderComponent, SidePanelComponent, DocumentViewComponent } from 'src/app/components';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'documents',
    children: [
      { path: '', component: DocumentListComponent },
      { path: ':id', component: DocumentViewComponent },
      { path: 'new', component: DocumentFormComponent },
    ]
  },
  { path: '', component: HeaderComponent, outlet: 'header' },
  { path: '', component: SidePanelComponent, outlet: 'sidepanel' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
