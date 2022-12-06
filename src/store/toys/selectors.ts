import { RootState } from "store";

const getFilteredToys = (state: RootState) => state.toys.filteredToyList;
const getToys = (state: RootState) => state.toys.toyList;
const  getSearchParamsString =(state:RootState)=>state.toys.searchParamsString

export const toysSelectors = {
  getFilteredToys,
  getToys,
  getSearchParamsString
}