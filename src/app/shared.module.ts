import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentFormComponent, HeaderComponent, SidePanelComponent } from './components';
import { DocumentListComponent } from './components';
import { DocumentViewComponent } from './components';

const sharedComponents = [
  HeaderComponent,
  SidePanelComponent,
  DocumentFormComponent,
  DocumentListComponent,
  DocumentViewComponent
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule],
  exports: [
    ...sharedComponents,
    CommonModule
  ]
})
export class SharedModule { }
