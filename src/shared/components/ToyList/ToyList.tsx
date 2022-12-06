import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useRootSelector } from 'store';

import { toysSelectors } from 'store/toys/selectors';
import { Toy } from 'typings/global';
import { ToyCard } from '../ToyCard';

import s from './ToyList.module.scss'

type SortingDirection = 'highest' | 'lowest';

export type FilterType = {
    shape: string;
    color?: string;
    size?: string;
    isLIke?: boolean;
    year?: number;
    quantity?: number;
    sortByName?: SortingDirection | null;
    sortByQuantity?: SortingDirection | null;
}
const filterList = ['shape', 'color', 'size', 'isLIke', 'year', 'quantity', 'sortByName', 'sortByQuantity']

export const ToyList: FC = () => {

    const toys = useRootSelector(toysSelectors.getFilteredToys)

    return (
        <div className={s.container}>
            <div className={s.toyList}>
                {!!toys.length && toys.map((toy: Toy, index: number) => {
                    return <ToyCard key={index} toy={toy} />
                })}
            </div>
        </div>
    )
}