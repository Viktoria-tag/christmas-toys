import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router';

import { Header } from './Header';
import { useRootDispatch } from 'store';
import { toysAsyncActions } from 'store/toys/actions';

import s from './Base.module.scss';

export const BaseLayout = () => {
  const dispatch = useRootDispatch();




  return (
    <div className={s.screen}>
        <Header />
        <Outlet />
    </div>
  );
};
