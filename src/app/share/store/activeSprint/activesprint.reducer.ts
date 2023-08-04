import { createReducer, on } from "@ngrx/store";
import { ITask } from "src/app/models/task";
import { createActiveSprint , createActiveSprintFail , createSprintSuccess , deleteActiveSprintSuccess , loadActiveSprintFailure, loadActiveSprintSuccess, updateActiveSprintSuccess, createColumnFail , createColumnSuccess, loadActiveSprint, updateActiveSprint, updateActiveSprintFail} from "./activesprint.actions"; "./activesprint.actions"



 export interface AppState {
    allTask: ITask[];
    error?: any;
    status?: 'pending'| 'loading' | 'error' | 'success';
  }
export const initialState: AppState = {
  allTask: [],
  error: null,
  status: 'pending'
}


export const ActiveSprintReducer = createReducer(
    initialState,
    on(loadActiveSprint, (state) => {
      return {
          ...state,
      }
  }),

  on(loadActiveSprintSuccess, (state, action) => {
      return {
          ...state,
          allTask: action.activeSprint,
          tatus: 'success',
      }       
  }),
  on(loadActiveSprintFailure, (state, {error}) =>{
      return {
          ...state,
          tatus: 'error',
          error: error
      }
  }),
    on(createActiveSprint, (state) => {
        return {
            ...state,
        }
    }),

    on(createSprintSuccess, (state, {contentActiveSprint}) => {
      return {
        ...state,
        allTask: [...state.allTask,contentActiveSprint],
       tatus: 'success',
    }
    }), 
    
    on(createActiveSprintFail, (state, {error}) => {
      return {
        ...state,
        tatus: 'error',
        error: error
    }
    }), 

    on(deleteActiveSprintSuccess, (state, { activeSprintId }) => {
      // Lọc và cập nhật state sau khi xóa item
      const updatedAlltask = state.allTask.filter(item => item.id !== activeSprintId);
      console.log(updatedAlltask, activeSprintId)
      return { ...state, allTask: updatedAlltask , tatus: 'success', };
    }),
  


  on(updateActiveSprint, (state, action) => {
    return {
      ...state,
  }
  }), 
  on(updateActiveSprintFail, (state, {error}) => {
    return {
      ...state,
      tatus: 'error',
      error: error
  }
  }), 

  on(updateActiveSprintSuccess, (state, {activeSprint}) => { 
    const updatedItems = state.allTask.map(existingItem => existingItem.id === activeSprint.id ? activeSprint : existingItem);
    return { ...state, allTask: updatedItems , tatus: 'success',} 
  })

  /* on(createColumnSuccess, (state, action) => { // Trích xuất thông tin name và newItem từ payload

  return { 
    ...state, 
    mainArray: [{ name: action.columnName , data: []}, ...state.mainArray] 
  };
    
  }),  */


)
