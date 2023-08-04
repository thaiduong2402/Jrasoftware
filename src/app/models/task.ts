

export interface ITask{
    id: number;
    description: string;
    name: string;
    process : string
    done: boolean;
} 

export interface IArrTask{
    name: string;
    data: ITask[]
} 
