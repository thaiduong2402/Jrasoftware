import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../../../../models/task';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sprint-item',
  templateUrl: './sprint-item.component.html',
  styleUrls: ['./sprint-item.component.scss']
})
export class SprintItemComponent implements OnInit {

  @Input() item: ITask | undefined;

  @Input() isDone: boolean | undefined;

  @Input() isUpdating: boolean = false;

  @Output() dataToParentDelete = new EventEmitter<ITask>();

  @Output() dataToParentUpdate = new EventEmitter<ITask>();

  name = new FormControl('');

  constructor(){
    this.name.setValue('Nancy');
  }

  ngOnInit(): void {
  }
  onDelete(item : ITask | undefined): void {

    
    // Gửi dữ liệu tới component cha thông qua sự kiện dataToParentEvent
    this.dataToParentDelete.emit(item);
  }

  onEdit(task : ITask | undefined): void {
    
    this.isUpdating = !this.isUpdating;
    // Gửi dữ liệu tới component cha thông qua sự kiện dataToParentEvent
    this.dataToParentUpdate.emit(task);
  }

}
