import React, { useEffect } from "react";
import styles from "./Products.module.scss";
import { CardData } from "../../data/data";
import { Card } from "../Card/Card";
import Htag from "../Htag/Htag";
import AOS from "aos";
import "aos/dist/aos.css";


export const Products = (): JSX.Element => {
 
    AOS.init({ duration: 2000});
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          <Htag data-aos="fade-up" tag="h1">
            Featured Products <br /> For Pre-Order
          </Htag>
        </div>
        <div className={styles.products}>
          {CardData.map((p) => (
            <Card key={p.id} card={p} />
          ))}
        </div>
      </div>
    </div>
  );
};
