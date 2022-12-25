import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Toy } from 'typings/global';
import { toysAsyncActions } from './actions';

export type ToysStore = {
  toyList: Toy[];
  filteredToyList: Toy[],
  isLoading: boolean,
};

const toysSlice = createSlice({
  name: 'toys',
  initialState: {
    filteredToyList: [],
    toyList: [],
    isLoading: false,
  } as ToysStore,

  reducers: {
    setToyList(state, action: PayloadAction<Toy[]>) {
      state.toyList = action.payload;
    },
    setFilteredToyList(state, action: PayloadAction<Toy[]>) {
      state.filteredToyList = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(toysAsyncActions.getInitialToyList.fulfilled, (state, action: PayloadAction<Toy[]>) => {
        state.toyList = action.payload;
        state.isLoading = false;
      })

      .addCase(toysAsyncActions.getInitialToyList.rejected, (state) => {
        state.toyList = [];
        state.isLoading = true;
      })

      .addCase(toysAsyncActions.getInitialToyList.pending, (state) => {
        state.isLoading = true;
      });

  },
});

export const { actions: toysActions, caseReducers: toysCaseReducers, reducer: toysReducer } = toysSlice;
