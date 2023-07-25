import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import {NgFor} from '@angular/common';

import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask } from '../models/task';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoForm !: FormGroup; 
  tasks : ITask [] = []; 
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
      console.log('tassk:',this.tasks)
      console.log('in:',this.inprogress)
      console.log('done:',this.done)
    }
  }

  constructor(private fb : FormBuilder){

  }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      item : ['',  [Validators.required]]
  })
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

  updateTask() {
    this.tasks[this.upDateId].description = this.todoForm.value.item;
    this.isUpdating = false;
    this.todoForm.reset();
    this.upDateId = undefined;
    this.isUpdating = false;
  }
  

}

