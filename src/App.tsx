import { Home } from 'modules/Home';
import { Toys } from 'modules/Toys';
import { Tree } from 'modules/Tree';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { routes } from 'shared/constants';
import { BaseLayout } from 'shared/layouts/Base';
import './App.css';

import './assets/styles/general.scss'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<BaseLayout />} >
          <Route index  element={<Home />} />
          <Route path={routes.toys} element={<Toys />} />
          <Route path={routes.tree} element={<Tree />} />
        </Route>
        <Route path='*' element={<Navigate to={routes.home} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
