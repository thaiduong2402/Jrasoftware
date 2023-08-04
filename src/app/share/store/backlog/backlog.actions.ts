import { createAction, props } from "@ngrx/store";
import { ITask } from "src/app/models/task";

export const loadBackLog = createAction(
    '[BackLog] Load BackLog'
);

export const loadBackLogSuccess  = createAction(
    '[BackLog] Load BackLog Success',
    (backlog: ITask[]) => ({backlog})
);

export const loadBackLogFailure = createAction(
    '[BackLog] Load BackLog Failure',
    (error: any) => ({error})
);

export const createBackLog = createAction(
    '[BackLog] Create BackLog',
    (contentSprint: any) => ({contentSprint})
);

export const createSprintSuccess = createAction(
    '[BackLog] Create BackLog Success',
    (contentBackLog: any) => ({contentBackLog})
);

export const createBackLogFail = createAction(
    '[BackLog] Create BackLog Fail',
    (error: any) => ({error})
);

export const deleteBackLogFail = createAction(
    '[BackLog] Create BackLog Fail',
    (error: any) => ({error})
);

export const deleteBackLog = createAction(
    '[BackLog] Delete BackLog',
    (backlogId: number) => ({backlogId})
)
export const deleteBackLogSuccess = createAction(
    '[BackLog] Delete BackLog Success',
    (backlogId: number) => ({backlogId})
)
export const updateBackLog = createAction(
    '[BackLog] Update BackLog',
    (backlog: any) => ({backlog})
)

export const updateBackLogFail = createAction(
    '[BackLog] Update BackLog Fail',
    (error: any) => ({error})
)

export const updateBackLogSuccess = createAction(
    '[BackLog] Updata BackLog Success',
    (backlog: any) => ({backlog})
)

export const createColumnFail = createAction(
    '[BackLog] Create Column Fail',
    (error: any) => ({error})
);

export const createColumnSuccess = createAction(
    '[BackLog] Create Column Success',
    (columnName: string) => ({columnName})
)
