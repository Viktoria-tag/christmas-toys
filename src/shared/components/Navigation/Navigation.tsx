import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { routes } from 'shared/constants/routes';
import { usePathname } from 'shared/hooks';
import { IconsName } from 'typings/enums';
import { Icon } from '../Icon';

import s from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  const pathname = usePathname()


  console.log(pathname)

  return (
    <nav className={classNames(s.nav)}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <Link className={classNames(s.nav__link)} to={routes.home}>
            <Icon name={IconsName.Tree} height={60} width={48} />
          </Link>
        </li>
        <li className={s.nav__item}>
          <Link className={classNames(s.nav__link, { [s.nav__link_active]: pathname.includes(routes.toys) })} to={routes.toys}>
            Игрушки
          </Link>
        </li>
        <li className={s.nav__item}>
          <Link className={classNames(s.nav__link, { [s.nav__link_active]: pathname.includes(routes.tree)  })} to={routes.tree}>
            Ёлка
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { Navigation };
