import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PropertiesComponent } from './properties.component';

const routes: Routes = [
  {
    path: '',
    component: PropertiesComponent,
    data: {
      title: 'Properties'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertiesRoutingModule {}
