import { RootState } from "store";

const getSelectedToys = (state: RootState) => state.toys.selectedToyList;
const getToys = (state: RootState) => state.toys.toyList;

export const toysSelectors = {
  getSelectedToys,
  getToys,
}