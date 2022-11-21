import {Outlet} from 'react-router';

import {Header} from './Header';

import s from './Base.module.scss';

export const BaseLayout = () => {
  return (
    <div className={s.screen}>
      <Header />
      <Outlet />
    </div>
  );
};
