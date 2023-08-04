import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-create-column',
  templateUrl: './dialog-create-column.component.html',
  styleUrls: ['./dialog-create-column.component.scss']
})
export class DialogCreateColumnComponent implements OnInit {

  columnForm !: FormGroup; 
  constructor( public fb : FormBuilder, public dialogAddRef: DialogRef<any>, @Inject(DIALOG_DATA) public data: any){
    dialogAddRef.disableClose = false;
  }
  


  ngOnInit(): void {
  this.columnForm = this.fb.group({
      process : ['',  [Validators.required]],
  })

  }

}
