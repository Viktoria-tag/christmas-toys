import {Outlet} from 'react-router';

import {Header} from './Header';

export const BaseLayout = () => {
  return (
    <div className="screen">
      <Header />
      <Outlet />
    </div>
  );
};
