import { CdkDragDrop, CdkDragEnter, CdkDragExit, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ITask } from 'src/app/models/task';
import { BacklogItemComponent } from '../../components/backlog-item/backlog-item.component';
import { ActivesprintService } from 'src/app/core/sevices/activeSprint/activesprint.service';
import { BackLogService } from 'src/app/core/sevices/backlog/backlog-service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appState';
import { selectAllBackLog } from 'src/app/share/store/backlog/backlog.selector';
import { createActiveSprint, deleteActiveSprint, loadActiveSprint } from 'src/app/share/store/activeSprint/activesprint.actions';
import { createBackLog, deleteBackLog, loadBackLog } from 'src/app/share/store/backlog/backlog.actions';
import { selectAllSprint } from 'src/app/share/store/activeSprint/activesprint.selector';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss'],
})

export class BacklogComponent implements OnInit {
  isDetailOpen: boolean = false;
  item: ITask | undefined;
  panelOpenState = false;
  sprint: any[] = [];
  backlog: ITask[] = [];

  constructor(private sv : ActivesprintService , private bl : BackLogService, private store: Store<AppState>){
  }
  private filterDataByProgress(data: ITask[]) {
    const progressArrays:any[] = [];

    // Lọc dữ liệu và đưa vào các mảng tương ứng
    data.forEach(item => {
      progressArrays.push(item)
    });

    // Chuyển đổi đối tượng thành mảng để trả về
    return progressArrays;
  }

  ngOnInit(): void{
    this.loadData()
    this.store.select(selectAllSprint).subscribe(data=>{
      this.sprint = this.filterDataByProgress(data)
    })
    this.store.select(selectAllBackLog).subscribe(data=>{
      this.backlog = this.filterDataByProgress(data)
    })
    
    /* this.loadData();
    this.store.select(selectAllBackLog).subscribe(data=>{
      this.backlog = data
      console.log(data)
    })
    this.store.select(selectAllSprint).subscribe(data=>{
      this.sprint = data
      console.log(data)
    }) */
  }

  loadData() {  
    this.store.dispatch(loadBackLog());
    this.store.dispatch(loadActiveSprint());
  }
  
  onClickClose(){
    this.isDetailOpen = false;
  }

  dropSprint(event: CdkDragDrop<ITask[]>) {

    
    /* const item: ITask = {
      id: event.previousContainer.data[event.previousIndex].id,
      description: event.previousContainer.data[event.previousIndex].description,
      name: event.previousContainer.data[event.previousIndex].name,
      process: event.container.data[0].process,
      done: false
    } */
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log('sprint',this.sprint[event.currentIndex])
      const item = this.sprint[event.currentIndex]
      this.store.dispatch(deleteBackLog(item.id))
      this.store.dispatch(createActiveSprint(item))
    }
  }


  dropBacklog(event: CdkDragDrop<ITask[]>) {

    
    /* const item: ITask = {
      id: event.previousContainer.data[event.previousIndex].id,
      description: event.previousContainer.data[event.previousIndex].description,
      name: event.previousContainer.data[event.previousIndex].name,
      process: event.container.data[0].process,
      done: false
    } */
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      console.log('backlog',this.backlog[event.currentIndex])
      const item = this.backlog[event.currentIndex]
      this.store.dispatch(deleteActiveSprint(item.id))
      this.store.dispatch(createBackLog(item))
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

