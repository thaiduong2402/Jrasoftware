import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ITask } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class ActivesprintService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "http://localhost:3000/alltask"
  getDataActivesprint(){
    return this.http.get<ITask[]>(this.baseUrl)
  }
  getActivesprintById = (id: number) => {
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  createActivesprint = (task: ITask) => {
    return this.http.post(this.baseUrl, task);
    } 
  deleteActivesprint = (id: number) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  updateActivesprint = (task: ITask) => {
    return this.http.put(`${this.baseUrl}/${task.id}`, task);
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

}
