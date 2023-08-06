import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, ItemArray } from '../../../models/appState';
import { BackLogState } from './backlog.reducer';

// Tạo một feature selector để lấy state từ AppState
export const selectAppState = createFeatureSelector<BackLogState>('backlog');
export const selectTodo = (state: BackLogState) => state.backlog;

export const selectAllBackLog = createSelector(
    selectAppState,
    (state: BackLogState) => state.backlog
  );

// Tạo một selector để lấy mảng data từ SubArrayItem dựa vào name