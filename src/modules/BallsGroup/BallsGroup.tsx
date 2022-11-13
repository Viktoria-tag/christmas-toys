import {FC} from 'react';
import classNames from 'classnames';

import styles from './BallsGroup.module.scss'

export const BallsGroup:FC = ()=>{
return(
    <>
    <div className={classNames(styles.ball, styles.ball1)}/>
    <div className={classNames(styles.ball, styles.ball2)}/>
    </>
)
}