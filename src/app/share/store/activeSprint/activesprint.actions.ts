import { createAction, props } from "@ngrx/store";
import { ITask } from "src/app/models/task";

export const loadActiveSprint = createAction(
    '[ActiveSprint] Load ActiveSprint'
);

export const loadActiveSprintSuccess  = createAction(
    '[ActiveSprint] Load ActiveSprint Success',
    (activeSprint: ITask[]) => ({activeSprint})
);

export const loadActiveSprintFailure = createAction(
    '[ActiveSprint] Load ActiveSprint Failure',
    (error: any) => ({error})
);

export const createActiveSprint = createAction(
    '[ActiveSprint] Create ActiveSprint',
    (contentSprint: any) => ({contentSprint})
);

export const createSprintSuccess = createAction(
    '[ActiveSprint] Create ActiveSprint Success',
    (contentActiveSprint: any) => ({contentActiveSprint})
);

export const createActiveSprintFail = createAction(
    '[ActiveSprint] Create ActiveSprint Fail',
    (error: any) => ({error})
);

export const deleteActiveSprintFail = createAction(
    '[ActiveSprint] Create ActiveSprint Fail',
    (error: any) => ({error})
);

export const deleteActiveSprint = createAction(
    '[ActiveSprint] Delete ActiveSprint',
    (activeSprintId: number) => ({activeSprintId})
)
export const deleteActiveSprintSuccess = createAction(
    '[ActiveSprint] Delete ActiveSprint Success',
    (activeSprintId: number) => ({activeSprintId})
)
export const updateActiveSprint = createAction(
    '[ActiveSprint] Update ActiveSprint',
    (activeSprint: any) => ({activeSprint})
)

export const updateActiveSprintFail = createAction(
    '[ActiveSprint] Update ActiveSprint Fail',
    (error: any) => ({error})
)

export const updateActiveSprintSuccess = createAction(
    '[ActiveSprint] Updata ActiveSprint Success',
    (activeSprint: any) => ({activeSprint})
)

export const createColumnFail = createAction(
    '[ActiveSprint] Create Column Fail',
    (error: any) => ({error})
);

export const createColumnSuccess = createAction(
    '[ActiveSprint] Create Column Success',
    (columnName: string) => ({columnName})
)
