import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState';
import { ITask } from 'src/app/models/task';
import { updateActiveSprint } from 'src/app/share/store/activeSprint/activesprint.actions';
import { updateBackLog } from 'src/app/share/store/backlog/backlog.actions';
import { BackLogState } from 'src/app/share/store/backlog/backlog.reducer';

@Component({
  selector: 'app-detail-backlog',
  templateUrl: './detail-backlog.component.html',
  styleUrls: ['./detail-backlog.component.scss']
})
export class DetailBacklogComponent implements OnInit {
  processs: string[] = ['todo', 'inprogress', 'done'];
  filteredProcess: string[] = [];

  @Input() item: ITask | undefined;
  @Output() dataIsCloseToParent = new EventEmitter();
  

  constructor(private store: Store<BackLogState>){
    

  }
  ngOnInit(): void {
    this.filteredProcess = this.processs.filter(status => status !== this.item?.process);
    console.log(this.filteredProcess)
  }
  
  onClose()
  {
    this.dataIsCloseToParent.emit();
  }

  onChangeProcess(data: any , process: string){
    const item: ITask = {
      id : data.id,
      description: data.description,
      name: data.name,
      process: process,
      done: data.done
    }
    this.store.dispatch(updateBackLog(item))
    this.store.dispatch(updateActiveSprint(item))
    this.onClose()
  }

}
