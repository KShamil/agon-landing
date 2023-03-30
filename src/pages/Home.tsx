import { Categories, FirstSection, Products, SmallCardsSection, Subscribe, Work } from '../components';
import { withLayout } from "../Layout/Layout";
import styles from './Home.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <FirstSection/>
        <SmallCardsSection/>
        <Products/>
        <Categories/>
        <Work/>
        <Subscribe/>
      </div>
    </main>
  );
};

export default withLayout(Home);
