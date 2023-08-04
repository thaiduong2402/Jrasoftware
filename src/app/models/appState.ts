import { ITask } from "./task";

 export interface ItemArray {
    name: string; // Biến name
    data: ITask[];
  }

 export interface AppState {
    allTask: ITask[]; // Mảng chứa các object, mỗi object chứa một mảng con
  }