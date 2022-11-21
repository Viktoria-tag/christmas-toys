import {Logo} from 'shared/components/Logo';
import {Navigation} from 'shared/components/Navigation';

import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
        <div className={s.header__container}>
          <div className={s.header__group}>
            <Navigation className={s.header__nav} />
            <Logo className={s.header__logo} />
        </div>
      </div>
    </header>
  );
};

export {Header};
