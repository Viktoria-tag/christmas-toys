import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { toys } from 'services/toys';
import { Toy } from 'typings/global';

export type ToysStore = {
  toyList: Toy[];
};

const toysSlice = createSlice({
  name: 'toys',
  initialState: {
    toyList: toys,
  },

  reducers: {
 /* updateAccessToken(state, action: PayloadAction<any>) {
    state.user.accessToken = action.payload.accessToken;
    state.user.role = decodeJWT(action.payload.accessToken).role!;
  },*/

},
});

export const { actions: toysActions, caseReducers: toysCaseReducers, reducer: toysReducer } = toysSlice;
