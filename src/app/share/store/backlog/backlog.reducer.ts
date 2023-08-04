import { createReducer, on } from "@ngrx/store";
import { ITask } from "src/app/models/task";
import { createBackLog , createBackLogFail , createSprintSuccess , deleteBackLogSuccess , loadBackLogFailure, loadBackLogSuccess, updateBackLogSuccess, createColumnFail , createColumnSuccess, loadBackLog, updateBackLog, updateBackLogFail} from "./backlog.actions";



 export interface BackLogState {
    backlog: ITask[];
    error?: any;
    status?: 'pending'| 'loading' | 'error' | 'success';
  }
export const initialState: BackLogState = {
  backlog: [],
  error: null,
  status: 'pending'
}


export const BackLogReducer = createReducer(
    initialState,
    on(loadBackLog, (state) => {
      return {
          ...state,
      }
  }),

  on(loadBackLogSuccess, (state, action) => {
      return {
          ...state,
          backlog: action.backlog,
          tatus: 'success',
      }       
  }),
  on(loadBackLogFailure, (state, {error}) =>{
      return {
          ...state,
          tatus: 'error',
          error: error
      }
  }),
    on(createBackLog, (state) => {
        return {
            ...state,
        }
    }),

    on(createSprintSuccess, (state, {contentBackLog}) => {
      return {
        ...state,
        backlog: [...state.backlog,contentBackLog],
       tatus: 'success',
    }
    }), 
    
    on(createBackLogFail, (state, {error}) => {
      return {
        ...state,
        tatus: 'error',
        error: error
    }
    }), 

    on(deleteBackLogSuccess, (state, { backlogId }) => {
      // Lọc và cập nhật state sau khi xóa item
      const updatedAlltask = state.backlog.filter(item => item.id !== backlogId);
      console.log(updatedAlltask, backlogId)
      return { ...state, backlog: updatedAlltask , tatus: 'success', };
    }),
  


  on(updateBackLog, (state, action) => {
    return {
      ...state,
  }
  }), 
  on(updateBackLogFail, (state, {error}) => {
    return {
      ...state,
      tatus: 'error',
      error: error
  }
  }), 

  on(updateBackLogSuccess, (state, {backlog}) => { 
    const updatedItems = state.backlog.map(existingItem => existingItem.id === backlog.id ? backlog : existingItem);
    return { ...state, backlog: updatedItems , tatus: 'success',} 
  })

  /* on(createColumnSuccess, (state, action) => { // Trích xuất thông tin name và newItem từ payload

  return { 
    ...state, 
    mainArray: [{ name: action.columnName , data: []}, ...state.mainArray] 
  };
    
  }),  */


)
