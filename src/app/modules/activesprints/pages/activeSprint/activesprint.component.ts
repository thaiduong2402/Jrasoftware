import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  CdkDragEnter,
} from '@angular/cdk/drag-drop';
import { Location } from '@angular/common';
import { ITask } from '../../../../models/task';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { DialogCreateComponent } from '../../components/dialog-create/dialog-create.component';
import { Observable, Subscription, map, of } from 'rxjs';
import { DialogCreateColumnComponent } from '../../components/dialog-create-column/dialog-create-column.component';
import { Store, select } from '@ngrx/store';
import { AppState, ItemArray } from '../../../../models/appState';
import { selectAllSprint  } from '../../../../share/store/activeSprint/activesprint.selector';
import { createColumnSuccess, createSprintSuccess, deleteActiveSprintSuccess , loadActiveSprint, loadActiveSprintSuccess,createActiveSprint, updateActiveSprintSuccess, deleteActiveSprint, updateActiveSprint } from '../../../../share/store/activeSprint/activesprint.actions';



@Component({
  selector: 'app-activesprint',
  templateUrl: './activesprint.component.html',
  styleUrls: ['./activesprint.component.scss']
})
export class ActiveSprintComponent implements OnInit {


  /* todo : IArrTask = {name : 'todo', data : []};
  done : IArrTask = {name : 'done', data : []};
  inprogress : IArrTask = {name : 'inprogress', data : []}; */
  todoForm !: FormGroup; 
  navbar = ['Your Work','Projects','Filter','Dashboard','Team','App']
  /* allTask : IArrTask[] = [
    this.todo,
    this.inprogress,
    this.done
  ]; */
  isUpdating : boolean = false;
  constructor(private fb : FormBuilder,public dialog: Dialog, private store: Store<AppState> , private location: Location){
    
    this.store.dispatch(loadActiveSprint());
    
  }
  
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      name : ['',  [Validators.required]],
      description: ['',  [Validators.required]]
  })
  }

  refreshPage() {
    console.log('rf')
    this.location.go(this.location.path());
  }
  
  addTask(task: ITask) {
    //this.todo.data.push(task)
    this.todoForm.reset() 
    this.store.dispatch(createActiveSprint(task))
    window.location.reload()
  }
  openDialog(id?: number, process?: string): void {
    if(this.dialog.openDialogs.length==0){
      const dialogRef = this.dialog.open<any>(DialogCreateComponent, {
        data: {
          id: id,
          isUpdating: this.isUpdating,
          name: (this.todoForm.value.name) ,
          description: ( this.todoForm.value.description),
          process : process,
        },
        disableClose: false,
      });
      dialogRef.closed.subscribe(result => {
        console.log(111, result);
        result.isUpdate ? this.updateTask(result) : this.addTask(result)
        this.isUpdating = false;
      });
    }
  }

  openDialogAddColumn(): void {
    if(this.dialog.openDialogs.length==0){
      const dialogAddRef = this.dialog.open<any>(DialogCreateColumnComponent, {
        data: {
          process: (this.todoForm.value.process) ,
        },
        disableClose: false,
      });
      dialogAddRef.closed.subscribe(result => {
        if(result)
        {
          const item = {
            process : result.process,
          }
          this.store.dispatch(createActiveSprint(item))
          /* this.store.dispatch(createColumnSuccess(result.name)) */
        }
      });
    }
  }
  isIdInArrays(item: ITask, arrays: ITask[][]): boolean {
  return arrays.some(array => array.some(obj => obj.id === item.id));
}

  deleteSprint(data: ITask ) {
    console.log(data)
    this.store.dispatch(deleteActiveSprint(data.id))
    /* console.log('111 a', this.allTask)
    for (let i = 0; i < this.allTask.length; i++) {
      const subArray = this.allTask[i];
      const index = subArray.data.findIndex(item => item.id === data?.id);
      if (index !== -1) {
        subArray.data.splice(index, 1);
        break; // Kết thúc vòng lặp sau khi xóa phần tử
      }
  } */
  }

  updateTask(data: ITask) {
    this.store.dispatch(updateActiveSprint(data))
    /* console.log('111 a', this.allTask)
      for (let i = 0; i < this.allTask.length; i++) {
        const subArray = this.allTask[i];
        const index = subArray.data.findIndex(item => item.id === data.id);
        if (index !== -1) {
          subArray.data[index] = data;
          break; // Kết thúc vòng lặp sau khi xóa phần tử
        }
    } */
  }
  
  receiveDataFromChildDelete(data: ITask) {
    // Xử lý dữ liệu từ component con
    this.deleteSprint(data)
  }

  receiveDataFromChildUpdate(data: ITask) {
    this.isUpdating= true;
    of(this.todoForm.patchValue({
      name: data.name,
      description: data.description,
    })).subscribe;
    this.openDialog(data.id, data.process)
  }
}

