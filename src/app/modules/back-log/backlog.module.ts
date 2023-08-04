import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogComponent } from './pages/backlog/backlog.component';
import { RouterModule } from '@angular/router';
import { BackLogRoutingModule } from './backlog-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ActivesprintModule } from '../activesprints/activesprint.module';
import { BacklogItemComponent } from './components/backlog-item/backlog-item.component';
import {MatButtonModule} from '@angular/material/button';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { DetailBacklogComponent } from './components/detail-backlog/detail-backlog.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    BacklogComponent,
    BacklogItemComponent,
    DetailBacklogComponent, 
  ],
  imports: [
    CommonModule,
    BackLogRoutingModule,
    RouterModule,
    MatExpansionModule,
    MatIconModule,
    DragDropModule,
    ActivesprintModule,
    MatButtonModule,
    ScrollingModule,
    MatMenuModule,
  ]
})
export class BackLogModule { }
