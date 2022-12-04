import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

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

    const toys = useSelector(toysSelectors.getToys)
    const [filterToys, setFilterToys] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const filtersArray = Array.from(searchParams.values())
        if (filtersArray.length === 0) {
            setFilterToys(toys)
        }
    }, [toys, searchParams])


    useEffect(() => {

        ['shape', 'color', 'size'].forEach((param) => {
            const filters = searchParams.getAll(param)


            if (filters.length) {
                const newFilterToys = filterToys.filter((toy) => {
                    console.log(toy[param], filters)
                    filters.includes(toy[param])
                })
                setFilterToys(newFilterToys)

            }
        })
        /*searchParams.forEach((key, value) => {
            if (.includes(value)) {
                console.log(key, value)
            }
        })*/
    }, [searchParams, toys])

    return (
        <div className={s.container}>
            <div className={s.toyList}>
                {filterToys.length && toys.map((toy: Toy, index: number) => {
                    return <ToyCard key={index} toy={toy} />
                })}
            </div>
        </div>
    )
}