import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useRootDispatch } from 'store';
import { toysAsyncActions } from 'store/toys/actions';
import { toysSelectors } from 'store/toys/selectors';
import { Toy } from 'typings/global';
import { ToyCard } from '../ToyCard';

import s from './ToyList.module.scss'

export const ToyList: FC = () => {
    const dispatch = useRootDispatch()
    const toys = useSelector(toysSelectors.getToys)

    const setInitialToyList = async () => {
        dispatch(toysAsyncActions.getInitialToyList())
    }

    useEffect(() => {
        setInitialToyList()
    }, [])

console.log(typeof toys)
    return (
        <div className={s.container}>
            {/*!!toys.length && toys.map((toy: Toy, index: number) => {
                return <ToyCard key={index} />
            })*/}
        </div>
    )
}