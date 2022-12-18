import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Toy } from 'typings/global';
import { toysAsyncActions } from './actions';

export type ToysStore = {
  toyList: Toy[];
  selectedToyList: Toy[],
  searchParamsString:string,
  isLoading: boolean,
};

const toysSlice = createSlice({
  name: 'toys',
  initialState: {
    filteredToyList: [],
    toyList: [],
    searchParamsString: '',
    isLoading: false,
  },

  reducers: {
    setToyList(state, action: PayloadAction<any>) {
      state.toyList = action.payload;
    },
    setFilteredToyList(state, action: PayloadAction<any>) {
      console.log(action.payload)
      state.filteredToyList = action.payload;
    },
    setSearchParamsString(state, action: PayloadAction<any>) {
      state.searchParamsString = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(toysAsyncActions.getInitialToyList.fulfilled, (state, action: any) => {
        state.toyList = action.payload;
        state.isLoading = false;
      })

      .addCase(toysAsyncActions.getInitialToyList.rejected, (state, action: any) => {
        state.toyList = [];
        state.isLoading = true;
      })

      .addCase(toysAsyncActions.getInitialToyList.pending, (state, action: any) => {
        state.toyList = [];
        state.isLoading = true;
      });

  },
});

export const { actions: toysActions, caseReducers: toysCaseReducers, reducer: toysReducer } = toysSlice;
