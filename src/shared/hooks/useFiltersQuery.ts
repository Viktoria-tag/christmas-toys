import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import {FilterType} from 'shared/components/Filters'

export function useFilterQuery(){

const [searchParams, setSearchParams] = useSearchParams();
return [searchParams, setSearchParams]


  // возвращаем сам фильтр и две функции для его изменения
  //return [filter, сhangeFilter, сlearFilter];
}



/*
const getObjectFromQueryString = (search: string) => {
  const paramsEntries = new URLSearchParams(search).entries();
  
  return Object.fromEntries(paramsEntries);
};
const getQueryStringFromObject = (filter: FilterType) => {
  console.log(filter)
  return new URLSearchParams(filter).toString()
};

function omit(obj:object, key: keyof object) {
  var result = {... obj};
     delete result[key];
  return result;
}

type useFilterQueryTypes<FilterType> = [
  FilterType,
  (fieldName: string) => (value: string) => void,
  (fieldName: string) => () => void
];


export function useFilterQuery<T extends object>(
  getFilterQuery?: (query: string) => T,
  getSearchQuery?: (filter: FilterType) => string
): useFilterQueryTypes<FilterType> {
  const { search } = useLocation();
  const navigate = useNavigate();

  const filter = useMemo(() =>
    // используем функцию переданную через параметры или дефолтную
    (getFilterQuery ? getFilterQuery(search) : getObjectFromQueryString(search)),
    [search, getFilterQuery]
  );

  const setSearchQuery = useCallback((filter:FilterType) => {
      // используем функцию переданную через параметр или дефолтную
      const search = getSearchQuery 
        ? getSearchQuery(filter) 
        : getQueryStringFromObject(filter).toString();
      
      navigate(search, { replace: true });
   },
      [history, getSearchQuery]
  );

  const сhangeFilter = useCallback((fieldName: string) => (value: string) => {
      const newFilter = { ...filter, [fieldName]: value };

      setSearchQuery(newFilter);
   },
    [filter, setSearchQuery]
  );

  const сlearFilter = useCallback((fieldName: string) => () => {
      const newFilter = omit(filter, fieldName as keyof FilterType);

      setSearchQuery(newFilter);
   },
    [filter, setSearchQuery]
  );
  // возвращаем сам фильтр и две функции для его изменения
  return [filter, сhangeFilter, сlearFilter];
}
*/