import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ITask } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class BackLogService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "http://localhost:3000/backlog"
  getDataBackLog(){
    return this.http.get<ITask[]>(this.baseUrl)
  }
  getBackLogById = (id: number) => {
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  createBackLog = (task: ITask) => {
    return this.http.post(this.baseUrl, task);
    } 
  deleteBackLog = (id: number) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateBackLog = (task: ITask) => {
    return this.http.put(`${this.baseUrl}/${task.id}`, task);
  }

}
