import React from "react";
import styles from "./Subscribe.module.scss";
import diagramma from "./diagramma.png";
import people from "./people.png";
import arrow from "./arrow.png";

export const Subscribe = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.subscribe}>
          <div className={styles.left}>
            <h2 className={styles.title}>Subscribe our newsletter</h2>
            <span className={styles.text}>
              By clicking the button, you are agreeing with our Term & <br />
              Conditions
            </span>
            <div className={styles.form}>
              <input placeholder='Enter you mail...' className={styles.input} type="text" />
              <button className={styles.button}>
                <img src={arrow} alt="error" />
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.image}>
              <img src={people} alt="error" />
            </div>
            <div className={styles.diagrammImage}>
              <img src={diagramma} alt="error" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
