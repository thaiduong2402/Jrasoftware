import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BackLogState } from './backlog.reducer';
import { Store } from '@ngrx/store';
import { BackLogService } from 'src/app/core/sevices/backlog/backlog-service';
import { updateBackLog, updateBackLogFail, createBackLog, createBackLogFail, createSprintSuccess, loadBackLog, loadBackLogFailure, loadBackLogSuccess, deleteBackLog, deleteBackLogFail,deleteBackLogSuccess, updateBackLogSuccess} from '../backlog/backlog.actions'
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class MyEffects {

  getBackLog$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loadBackLog),
        switchMap(() => 
            from(this.BackLogService.getDataBackLog()).pipe(
                map((backlog) => loadBackLogSuccess(backlog)),
                catchError((error) => of(loadBackLogFailure({error: error})))
            )
        )
    )
  );

  createBackLog$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createBackLog),
      switchMap((action) => 
        this.BackLogService.createBackLog(action.contentSprint).pipe(
          map((activesprint) => createSprintSuccess(activesprint)),
          catchError((error) => of(createBackLogFail( {error: error})))
        ) 
      )
    )
  )

  deleteBackLog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteBackLog),
      switchMap((action) => 
        this.BackLogService.deleteBackLog(action.backlogId).pipe(
          map(() => deleteBackLogSuccess(action.backlogId)),
          catchError((error) => of(deleteBackLogFail({error: error})))
        )
      )
    )
  )

  updateActieSprint$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateBackLog),
      switchMap((action) => 
        this.BackLogService.updateBackLog(action.backlog).pipe(
          map((backlog) => updateBackLogSuccess(backlog)),
          catchError((error) => of(updateBackLogFail({error: error})))
        )
      )
    )
  )

  constructor(
    private actions$: Actions, 
    private store: Store<BackLogState>,
    private BackLogService: BackLogService
    
) {}


}
