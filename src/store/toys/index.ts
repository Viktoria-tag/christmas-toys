import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { service } from 'api';
import { Toy } from 'typings/global';
import { toysAsyncActions } from './actions';

export type ToysStore = {
  toyList: Toy[];
};

const toysSlice = createSlice({
  name: 'toys',
  initialState: {
    toyList: [],
  },

  reducers: {
  /*  setToyList(state, action: PayloadAction<any>) {
      state.toyList = action.payload.fullName;
    },*/
  },
    extraReducers: (builder) => {
      builder
        .addCase(toysAsyncActions.getInitialToyList.fulfilled, (state, action: any) => {
          state.toyList = action.payload.data;

        })
        .addCase(toysAsyncActions.getInitialToyList.rejected, (state, action: any) => {
          state.toyList = [];
        });

      /* updateAccessToken(state, action: PayloadAction<any>) {
         state.user.accessToken = action.payload.accessToken;
         state.user.role = decodeJWT(action.payload.accessToken).role!;
       },*/

  },
});

export const { actions: toysActions, caseReducers: toysCaseReducers, reducer: toysReducer } = toysSlice;
