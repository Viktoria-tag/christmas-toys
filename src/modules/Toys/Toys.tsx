import { SavedSearch } from 'App';
import { useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterBar } from 'shared/components/FilterBar';
import { ToyList } from 'shared/components/ToyList';
import { useRootDispatch, useRootSelector } from 'store';
import { toysActions } from 'store/toys';
import { toysAsyncActions } from 'store/toys/actions';
import { toysSelectors } from 'store/toys/selectors';

import styles from './Toys.module.scss';

export const Toys = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const savedSeach = useContext(SavedSearch);

 /* useEffect(() => {
    console.log('изменилсяапрлпрлп')
    return () => {
console.log(searchParams.toString(), 'б555')
      savedSeach!.setSearchParamsString(searchParams.toString())
    }
  }, [searchParams])*/

  return (
    <div className={styles.toys}>
      <FilterBar />
      <ToyList />
    </div>

  );
};
