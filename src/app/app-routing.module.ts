import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/activesprints/activesprint.module').then(m => m.ActivesprintModule),
  },
  {
    path: 'backlog',
    loadChildren: () => import('./modules/back-log/backlog.module').then(m => m.BackLogModule),
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
