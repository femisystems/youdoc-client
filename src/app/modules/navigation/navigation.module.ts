import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { NavigationComponent } from './navigation.component';

const components = [
  NavigationComponent
]

@NgModule({
  imports: [CommonModule],
  providers: [],
  declarations: components,
  exports: [...components, CommonModule]
})
export class NavigationModule {}
