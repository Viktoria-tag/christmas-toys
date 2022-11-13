import { Button, ButtonStyleAttributes } from 'shared/components/Button';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      {/*<Header />*/}
      <div className={styles.home}>
        <div className={styles.home__textContainer}>
          <p className={styles.home__title}>Помогите бабушке нарядить елку</p>
        </div>
        <Button buttonStyle={ButtonStyleAttributes.mainPage}>Начать</Button>
      </div>
    </>
  );
};
