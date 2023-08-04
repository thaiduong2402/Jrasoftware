import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/models/task';


@Component({
  selector: 'app-backlog-item',
  templateUrl: './backlog-item.component.html',
  styleUrls: ['./backlog-item.component.scss']
})
export class BacklogItemComponent {
  @Input() item: ITask | undefined;
  @Output() dataDetailToParent = new EventEmitter<any>();

  onClickDetail(item: any): void {
    this.dataDetailToParent.emit(item);
  }
}
