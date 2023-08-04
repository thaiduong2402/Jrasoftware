import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ITask } from 'src/app/models/task';
import { BacklogItemComponent } from '../../components/backlog-item/backlog-item.component';
import { ActivesprintService } from 'src/app/core/sevices/activeSprint/activesprint.service';
import { BackLogService } from 'src/app/core/sevices/backlog/backlog-service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})

export class BacklogComponent implements OnInit {
  isDetailOpen: boolean = false;
  item: ITask | undefined;
  panelOpenState = false;
  sprint: ITask[] = [{name : 'Scrum 2', id: 111, description: 'sprint', done : false , process : 'todo' }];
  backlog: ITask[] = [{name : 'Scrum 5', id: 111, description: 'backlog', done : false , process : 'backlog' }];

  constructor(private sv : ActivesprintService , private bl : BackLogService){
    
  }

  ngOnInit(): void{
    this.loadData();
  }

  loadData() {
    this.sv.getDataActivesprint()
  }
  
  onClickClose(){
    this.isDetailOpen = false;
  }

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
    }
  }


  receiveDataFromChild(data: any) {
    console.log(data)
    this.item = data;
    this.isDetailOpen = true;
  }

  receiveIsCloseFromChild(){
    this.isDetailOpen = false
  }

}

