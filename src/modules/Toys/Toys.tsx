import { FilterBar } from 'shared/components/FilterBar';
import { ToyList } from 'shared/components/ToyList';

import styles from './Toys.module.scss';

export const Toys = () => {

  return (
    <div className={styles.toys}>
      <FilterBar />
      <ToyList />
    </div>

  );
};
