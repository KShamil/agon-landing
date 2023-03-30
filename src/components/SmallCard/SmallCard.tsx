import React from 'react'
import { SmallCardProps } from './SmallCard.props'
import styles from './SmallCard.module.scss';

export const SmallCard = ({ smallCard }: SmallCardProps):JSX.Element => {
    const { img, title, price } = smallCard;
  return (
    <div className={styles.smallCard}>
        <div className={styles.image}>
            <img src={img} alt={title} />
        </div>
        <div className={styles.info}>
            <span className={styles.title}>{title}</span>
            <span className={styles.price}>${price}</span>
        </div>
    </div>
  )
}

