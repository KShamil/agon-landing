import React from 'react'
import { BoxProps } from './Box.props';
import cn from 'classnames';
import styles from './Box.module.css';

const Box = ({color,className,children,...props}:BoxProps):JSX.Element => {
  return (
    <div className={cn(styles.box,className, {
        [styles.orange]:color == 'orange',
        [styles.pink]:color == 'pink',
        [styles.green]:color == 'green',
        [styles.blue]:color == 'blue'
    })} {...props}>{children}</div>
  )
}

export default Box