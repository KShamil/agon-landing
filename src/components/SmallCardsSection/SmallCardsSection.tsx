import React from 'react'
import styles from './SmallCardsSection.module.scss';
import { SmallCard } from '../SmallCard/SmallCard';
import { smallCardData } from '../../data/data';

export const SmallCardsSection = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            {smallCardData.map(s => (
                <SmallCard key={s.id} smallCard={s}/>
            ))}
        </div>
    </div>
  )
}

