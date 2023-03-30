import React from "react";
import Button from "../Button/Button";
import Htag from "../Htag/Htag";
import styles from "./FirstSection.module.scss";
import vector1 from './vector1.png';
import vector2 from './vector2.png';
import appleWatch from './appleWatch.png';
import diagramma from './diagramma.png';

export const FirstSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.titles}>
            <Htag tag="h2">Exclusive Smart Watch</Htag>
            <Htag tag="h1">Let go of the Challenge <br /> See yourself better</Htag>
          </div>
          <div className={styles.description}>
            <p>
              Connect your conversations with the tools and services that you
              use to get the job done. With over 1,500 apps and a robust API
            </p>
          </div>
          <div className={styles.buttons}>
            <Button appearance="hero-black">Get Started</Button>
            <Button appearance="hero-ghost">How it works</Button>
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.circle}>
                <img src={vector1} alt="error" />
              </div>
              <div className={styles.info}>
                <span className={styles.number}>+12k</span>
                <span>Projects done</span>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.circle}>
                <img src={vector2} alt="error" />
              </div>
              <div className={styles.info}>
                <span className={styles.number}>68k</span>
                <span>Custommers</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src={appleWatch} alt="error" />
          </div>
          <div className={styles.redBall}></div>
          <div className={styles.greenBall}></div>
          <div className={styles.orangeBall}></div>
          <div className={styles.diagrammImage}>
            <img src={diagramma} alt="error" />
          </div>
        </div>
      </div>
    </div>
  );
};
