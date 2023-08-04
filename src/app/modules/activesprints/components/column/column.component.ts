import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  CdkDragEnter,
  CdkDragExit,
} from '@angular/cdk/drag-drop';
import { IArrTask, ITask } from 'src/app/models/task';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/models/appState';
import { selectAll } from 'src/app/share/store/activeSprint/activesprint.selector';
import { ActivesprintService } from 'src/app/core/sevices/activeSprint/activesprint.service';
import { updateActiveSprint } from 'src/app/share/store/activeSprint/activesprint.actions';
@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() item: ITask | undefined;

  @Input() isDone: boolean | undefined;

  @Input() isUpdating: boolean = false;

  @Output() dataToSprintParentDelete = new EventEmitter<ITask>();

  @Output() dataToSprintParentUpdate = new EventEmitter<ITask>();
  
  allTask$:Observable<any[]> | undefined;
  allTask: any[] = [];
  progressArrays: any;

  constructor( private store: Store<AppState> , private sv : ActivesprintService){

  }

  ngOnInit(): void {
    this.loadData();
    this.store.select(selectAll).subscribe(data=>{
      this.allTask = this.filterDataByProgress(data)
    })
  }
  private filterDataByProgress(data: ITask[]) {
    const progressArrays:any = {};

    // Lọc dữ liệu và đưa vào các mảng tương ứng
    data.forEach(item => {
      const process = item.process;
      if (!progressArrays[process]) {
        progressArrays[process] = { name: [process], data: [] };
      }
      progressArrays[process].data.push(item);
    });

    // Chuyển đổi đối tượng thành mảng để trả về
    return Object.values(progressArrays);
  }


  loadData() {
    this.allTask$ = this.sv.getDataActivesprint()
  }

  receiveDataFromChildDelete(data: ITask) { 
    this.dataToSprintParentDelete.emit(data);
  }

  receiveDataFromChildUpdate(data: ITask) {
    this.dataToSprintParentUpdate.emit(data);
  }


  onItemEntered(event: CdkDragEnter<any>) {
    const item = event.item.data;
    console.log("Dragged Item Entered: ", item);
  }

  onItemExited(event: CdkDragExit<any[]>) {
    const item = event.item;
    console.log("Dragged Item Exited: ", item, item);
  }

  drop(event: CdkDragDrop<any[]>) {
    /* const draggedItem = this.allTask[event.previousIndex];
    const droppedIndex = event.currentIndex;
    console.log("Dragged Item ID: ", draggedItem);
    console.log("Dragged Item Value: ", draggedItem); */
    const item: ITask = {
      id: event.previousContainer.data[event.previousIndex].id,
      description: event.previousContainer.data[event.previousIndex].description,
      name: event.previousContainer.data[event.previousIndex].name,
      process: event.container.data[0].process,
      done: false
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.store.dispatch(updateActiveSprint(item))
    }
  }
}
