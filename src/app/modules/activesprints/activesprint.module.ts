import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveSprintRoutingModule } from '../activesprints/activesprint-routing.module';
import { ColumnComponent } from '../activesprints/components/column/column.component';
import { DialogCreateComponent } from '../activesprints/components/dialog-create/dialog-create.component';
import { DialogCreateColumnComponent } from '../activesprints/components/dialog-create-column/dialog-create-column.component';
import { SprintItemComponent } from '../activesprints/components/sprint-item/sprint-item.component';
import { ActiveSprintComponent } from '../activesprints/pages/activeSprint/activesprint.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    ActiveSprintComponent,
    ColumnComponent,
    DialogCreateColumnComponent,
    DialogCreateColumnComponent,
    DialogCreateComponent,
    SprintItemComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    MatDialogModule,
    CommonModule,
    ActiveSprintRoutingModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatMenuModule
  ]
})
export class ActivesprintModule { }
