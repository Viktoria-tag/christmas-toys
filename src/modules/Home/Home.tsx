import { useNavigate } from 'react-router';
import { FC } from 'react';

import { Button, ButtonStyleAttributes } from 'shared/components/Button';
import { routes } from 'shared/constants';
import { BallsGroup } from 'shared/components/BallsGroup';

import styles from './Home.module.scss';

export const Home: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routes.toys)
  }
  return (
    <>
      <div className={styles.home}>
        <BallsGroup />
        <div className={styles.home__textContainer}>
          <p className={styles.home__title}>Помогите бабушке нарядить елку</p>
        </div>
        <Button buttonStyle={ButtonStyleAttributes.mainPage} onClick={handleClick}>Начать</Button>
      </div>
    </>
  );
};
