import React from "react";
import Htag from "../Htag/Htag";
import styles from "./Categories.module.scss";
import CompIcon from './comp.png';
import TabletIcon from './tablet.png';
import SharkIcon from './shark.png';
import BookIcon from './book.png';

export const Categories = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Htag tag="h1">Explore by Categories.</Htag>
          <Htag tag="h3">
            We provide many categories, choose a category according to <br /> your
            expertise to make it easier to find a job.
          </Htag>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <div className={styles.bigCard}>
              <h2>Popular Categories</h2>
              <div className={styles.list}>
                <span className={styles.title}>Computer - Laaptop</span>
                <span className={styles.circle}>10</span>
              </div>
              <div className={styles.list}>
                <span className={styles.title}>Smart phone & Tablets</span>
                <span className={styles.circle}>12</span>
              </div>
              <div className={styles.list}>
                <span className={styles.title}>Fashion & Accessories</span>
                <span className={styles.circle}>14</span>
              </div>
              <div className={styles.list}>
                <span className={styles.title}>Halth & Beauty</span>
                <span className={styles.circle}>8</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.middleCard}>
                <div className={styles.image}>
                    <img src={CompIcon} alt="error" />
                </div>
                <span className={styles.text}>Computer for Designer, Art</span>
            </div>
            <div className={styles.middleCard}>
                <span className={styles.text}>Sport, Home, Outdoor</span>
            </div>
            <div className={styles.middleCard}>
                <div className={styles.image}>
                    <img src={TabletIcon} alt="error" />
                </div>
                <span className={styles.text}>Laptop for office, students</span>
            </div>
            <div className={styles.middleCard}>
                <div className={styles.image}>
                    <img src={BookIcon} alt="error" />
                </div>
                <span className={styles.text}>Software, card, book</span>
            </div>
            <div className={styles.smallCard}>
                <div className={styles.img}>
                    <img src={SharkIcon} alt="error" />
                </div>
                <span className={styles.text}>Explore More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
