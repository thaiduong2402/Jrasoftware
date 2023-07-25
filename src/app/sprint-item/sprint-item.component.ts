import { Component, Input  } from '@angular/core';

import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask } from '../models/task';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sprint-item',
  templateUrl: './sprint-item.component.html',
  styleUrls: ['./sprint-item.component.scss']
})
export class SprintItemComponent {
  @Input() tasks: ITask [] = [];

  todoForm !: FormGroup; 

  done : ITask [] = [];
  inprogress : ITask [] = [];
  upDateId!: any;
  isUpdating : boolean = false;

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log()
    }
  }


  addTask(){
    this.tasks.push({
      description : this.todoForm.value.item,
      done : false
    })
    console.log(this.todoForm.value)
    this.todoForm.reset()
  }

  deleteTask(index: number) {
    this.tasks.splice(index,1)
  }

  editTask(item: ITask, index: number) {
    this.todoForm.controls['item'].setValue(item.description)
    this.upDateId = index;
    this.isUpdating = true;

  }

  constructor(private fb : FormBuilder){
console.log(this.tasks)
  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item : ['',  [Validators.required]]
  })
  }
}
