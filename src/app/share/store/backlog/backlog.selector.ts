import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, ItemArray } from '../../../models/appState';

// Tạo một feature selector để lấy state từ AppState
export const selectAppState = createFeatureSelector<AppState>('activeSprint');
export const selectTodo = (state: AppState) => state.allTask;

export const selectAll = createSelector(
    selectAppState,
    (state: AppState) => state.allTask
  );

// Tạo một selector để lấy mảng data từ SubArrayItem dựa vào name