import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './pages/backlog/backlog.component';
const routes: Routes = [
  {
    path: '',
    component: BacklogComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BackLogRoutingModule { }