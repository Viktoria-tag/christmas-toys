import { useEffect } from 'react';
import { FilterBar } from 'shared/components/FilterBar';
import { ToyList } from 'shared/components/ToyList';
import { useRootDispatch } from 'store';
import { toysActions } from 'store/toys';
import { toysAsyncActions } from 'store/toys/actions';

import styles from './Toys.module.scss';

export const Toys = () => {

  return (
    <div className={styles.toys}>
      <FilterBar />
      <ToyList />
    </div>

  );
};
