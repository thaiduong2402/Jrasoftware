import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/models/task';

@Component({
  selector: 'app-detail-backlog',
  templateUrl: './detail-backlog.component.html',
  styleUrls: ['./detail-backlog.component.scss']
})
export class DetailBacklogComponent {
  processFilter:string[] | undefined;
  @Input() item: ITask | undefined;
  @Output() dataIsCloseToParent = new EventEmitter();
  
  filter() {
    this.processFilter = ['todo', 'inprogress', 'done'].filter(data =>{
      data !=this.item?.process
    })
    console.log(this.processFilter)
  }
  constructor(){

  }
  
  onClose()
  {
    this.dataIsCloseToParent.emit();
  }
}
