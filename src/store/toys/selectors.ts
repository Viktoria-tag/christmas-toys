import { RootState } from "store";

const getFilteredToys = (state: RootState) => state.toys.filteredToyList;
const getToys = (state: RootState) => state.toys.toyList;
const getIsLoading = (state: RootState) => state.toys.isLoading

export const toysSelectors = {
  getFilteredToys,
  getToys,
  getIsLoading
}