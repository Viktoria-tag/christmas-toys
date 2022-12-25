import { useSearchParams } from "react-router-dom";

type useFilterQueryTypes = [
  searchParams: string[],
  setFilter: () => void,
  deleteFilter: () => void,
];

export const useFilterQuery = (value: string, name: string): useFilterQueryTypes => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.getAll(name)

  const setFilter = () => {
    searchParams.append(name, value)
    setSearchParams(searchParams)
  }
  const deleteFilter = () => {
    const updatedSearchParams = new URLSearchParams(
      [...searchParams].filter(
        ([key, val]) => key !== name || val !== value
      )
    )
    setSearchParams(updatedSearchParams)
  }
  return [params, setFilter, deleteFilter];
}