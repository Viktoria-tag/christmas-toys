import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      {/*<Header />*/}
      <div className={styles.home}>
        <p className={styles.home__title}>CRA + INO starter kit!</p>
      </div>
    </>
  );
};
