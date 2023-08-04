import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActiveSprintComponent } from '../activesprints/pages/activeSprint/activesprint.component';

const routes: Routes = [
  {
    path: '',
    component: ActiveSprintComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ActiveSprintRoutingModule { }
