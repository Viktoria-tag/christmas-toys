import {FC} from 'react';
import { Filters } from '../Filters';

import s from './FilterBar.module.scss'

export const FilterBar:FC =()=>{
    //TODO реадизовать компонент
    return(
        <div className={s.filters}>
            <Filters/>
        </div>
    )
}