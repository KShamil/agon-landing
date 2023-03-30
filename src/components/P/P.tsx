import React, { Children } from 'react'
import { PProps } from './P.props';
import styles from './P.module.css';

const P = ({children,...props}:PProps):JSX.Element => {
  return (
    <p className={styles.p}>{children}</p>
  )
}

export default P;