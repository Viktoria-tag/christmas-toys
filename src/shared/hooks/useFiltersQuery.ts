import { useSearchParams } from "react-router-dom";

type useFilterQueryTypes = [
  searchParams: string[],
  сhangeFilter: () => void,
  сlearFilter: () => void,

];

export const useFilterQuery = (value: string, name: string): useFilterQueryTypes => {

  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.getAll(name)

  const сhangeFilter = () => {

    searchParams.append(name, value)
    setSearchParams(searchParams)
  }
  const сlearFilter = () => {
    const updatedSearchParams = new URLSearchParams(
      [...searchParams].filter(
        ([key, val]) => key !== name || val !== value
      )
    )
    setSearchParams(updatedSearchParams)
  }
  return [params, сhangeFilter, сlearFilter];

}