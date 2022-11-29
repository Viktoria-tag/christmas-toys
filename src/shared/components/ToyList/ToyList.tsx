import { FC} from 'react';
import { useSelector } from 'react-redux';

import { toysSelectors } from 'store/toys/selectors';
import { Toy } from 'typings/global';
import { ToyCard } from '../ToyCard';

import s from './ToyList.module.scss'

export const ToyList: FC = () => {

    const toys = useSelector(toysSelectors.getToys)
    return (
        <div className={s.container}>
            <div className={s.toyList}>
                {toys.length && toys.map((toy: Toy, index: number) => {
                    return <ToyCard key={index} toy={toy} />
                })}
            </div>
        </div>
    )
}