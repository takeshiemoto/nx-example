import {
  createAsyncThunk,
  createEntityAdapter,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';

export const COUNTER_FEATURE_KEY = 'counter';

/*
 * Update these interfaces according to your requirements.
 */
export interface CounterEntity {
  id: number;
}

export interface CounterState extends EntityState<CounterEntity> {
  loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
  error: string;
}

export const counterAdapter = createEntityAdapter<CounterEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchCounter())
 * }, [dispatch]);
 * ```
 */
export const fetchCounter = createAsyncThunk(
  'counter/fetchStatus',
  async (_, thunkAPI) => {
    /**
     * Replace this with your custom fetch call.
     * For example, `return myApi.getCounters()`;
     * Right now we just return an empty array.
     */
    return Promise.resolve([]);
  }
);

export const initialCounterState: CounterState = counterAdapter.getInitialState(
  {
    loadingStatus: 'not loaded',
    error: null,
  }
);

export const counterSlice = createSlice({
  name: COUNTER_FEATURE_KEY,
  initialState: initialCounterState,
  reducers: {
    add: counterAdapter.addOne,
    remove: counterAdapter.removeOne,
    // ...
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounter.pending, (state: CounterState) => {
        state.loadingStatus = 'loading';
      })
      .addCase(
        fetchCounter.fulfilled,
        (state: CounterState, action: PayloadAction<CounterEntity[]>) => {
          counterAdapter.setAll(state, action.payload);
          state.loadingStatus = 'loaded';
        }
      )
      .addCase(fetchCounter.rejected, (state: CounterState, action) => {
        state.loadingStatus = 'error';
        state.error = action.error.message;
      });
  },
});

/*
 * Export reducer for store configuration.
 */
export const counterReducer = counterSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(counterActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const counterActions = counterSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllCounter);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = counterAdapter.getSelectors();

export const getCounterState = (rootState: unknown): CounterState =>
  rootState[COUNTER_FEATURE_KEY];

export const selectAllCounter = createSelector(getCounterState, selectAll);

export const selectCounterEntities = createSelector(
  getCounterState,
  selectEntities
);
