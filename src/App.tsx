import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'shared/constants';
import { BaseLayout } from 'shared/layouts/Base';

import { Home } from 'modules/Home';
import { Toys } from 'modules/Toys';
import { Tree } from 'modules/Tree';
import { useRootDispatch, useRootSelector } from 'store';
import { toysAsyncActions } from 'store/toys/actions';
import { toysActions } from 'store/toys';
import { toysSelectors } from 'store/toys/selectors';

import './App.css';
import 'assets/styles/common.scss'

export const SavedSearch =
  createContext<{ savedSearchString: string, setSearchParamsString: Function } | undefined>(undefined);

function App() {
  const toys = useRootSelector(toysSelectors.getToys)
  const [searchParamsString, setSearchParamsString] = useState('')

  const dispatch = useRootDispatch()

  useEffect(() => {
    dispatch(toysAsyncActions.getInitialToyList())
  }, [])

  useEffect(() => {
    if (!searchParamsString) dispatch(toysActions.setFilteredToyList(toys))
  }, [])

  return (
    <BrowserRouter>
      <SavedSearch.Provider value={{ savedSearchString: searchParamsString, setSearchParamsString }}>
        <Routes>
          <Route path={routes.home} element={<BaseLayout />} >
            <Route index element={<Home />} />
            <Route path={routes.toys} element={<Toys />} />
            <Route path={routes.tree} element={<Tree />} />
          </Route>
          <Route path='*' element={<Navigate to={routes.home} />} />
        </Routes>
      </SavedSearch.Provider>
    </BrowserRouter>
  );
}

export default App;
