import { Component, Inject, Input, OnInit } from '@angular/core';
import {Dialog, DialogRef, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { ITask } from '../../../../models/task';
import { FormGroup, FormBuilder , Validators } from '@angular/forms';
@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.scss']
})
export class DialogCreateComponent implements OnInit {


  @Input() item: ITask | undefined;

  todoForm !: FormGroup; 
  constructor( public fb : FormBuilder, public dialogRef: DialogRef<any>, @Inject(DIALOG_DATA) public data: any){
    dialogRef.disableClose = false;
  }
  


  ngOnInit(): void {
  this.todoForm = this.fb.group({
      name : ['',  [Validators.required]],
      description: ['',  [Validators.required]]
  })
  if(this.data?.isUpdating) {

    console.log('111  con update', this.data.id, this.data.process)
    this.todoForm.controls['name'].setValue(this.data.name)
    this.todoForm.controls['description'].setValue(this.data.description)
  } 

  }

  getUUID(): number {
    return Math.round(Math.random()*10000)
  }

  
}
