import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';

import {toysReducer} from './toys';

export const store = configureStore({
  reducer: {
   toys: toysReducer,
  },
});
