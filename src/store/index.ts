import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

import {toysReducer} from './toys';

export const store = configureStore({
  reducer: {
   toys: toysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export type RootThunk<R = unknown> = ThunkAction<R, RootState, unknown, Action>;

export function useRootDispatch() {
  return useDispatch<RootDispatch>();
}
export const useRootSelector: TypedUseSelectorHook<RootState> = (...args) => {
  return useSelector(...args);
};
export default store;
