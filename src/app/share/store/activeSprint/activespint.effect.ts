import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppState } from './activesprint.reducer';
import { Store } from '@ngrx/store';
import { ActivesprintService } from 'src/app/core/sevices/activeSprint/activesprint.service';
import { updateActiveSprint, updateActiveSprintFail, createActiveSprint, createActiveSprintFail, createSprintSuccess, loadActiveSprint, loadActiveSprintFailure, loadActiveSprintSuccess, deleteActiveSprint, deleteActiveSprintFail,deleteActiveSprintSuccess, updateActiveSprintSuccess} from '../activeSprint/activesprint.actions'
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';


@Injectable()
export class ActiveSprintEffects {

  getActiveSprint$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loadActiveSprint),
        switchMap(() => 
            from(this.activesprintService.getDataActivesprint()).pipe(
                map((activeSprint) => loadActiveSprintSuccess(activeSprint)),
                catchError((error) => of(loadActiveSprintFailure({error: error})))
            )
        )
    )
  );

  createActiveSprint$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createActiveSprint),
      switchMap((action) => 
        this.activesprintService.createActivesprint(action.contentSprint).pipe(
          map((activesprint) => createSprintSuccess(activesprint)),
          catchError((error) => of(createActiveSprintFail( {error: error})))
        ) 
      )
    )
  )

  deleteActiveSprint$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteActiveSprint),
      switchMap((action) => 
        this.activesprintService.deleteActivesprint(action.activeSprintId).pipe(
          map(() => deleteActiveSprintSuccess(action.activeSprintId)),
          catchError((error) => of(deleteActiveSprintFail({error: error})))
        )
      )
    )
  )

  updateActieSprint$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateActiveSprint),
      switchMap((action) => 
        this.activesprintService.updateActivesprint(action.activeSprint).pipe(
          map((activeSprint) => updateActiveSprintSuccess(activeSprint)),
          catchError((error) => of(updateActiveSprintFail({error: error})))
        )
      )
    )
  )

  constructor(
    private actions$: Actions, 
    private store: Store<AppState>,
    private activesprintService: ActivesprintService
    
) {}


}
