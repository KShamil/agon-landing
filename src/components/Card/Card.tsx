import React from "react";
import { ICardProps } from "./Card.props";
import styles from "./Card.module.scss";
import Button from "../Button/Button";
import { Rating } from '@mui/material';


export const Card = ({ card }: ICardProps): JSX.Element => {
  const { id, img, subtitle, title, price, rating } = card;
  return (
    <div key={id} className={styles.card}>
      <div className={styles.image}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.rating}>
        <Rating defaultValue={rating}/>
      </div>
      <div className={styles.priceButton}>
        <span className={styles.price}>${price}</span>
        <Button appearance="card-btn">Add +</Button>
      </div>
    </div>
  );
};
