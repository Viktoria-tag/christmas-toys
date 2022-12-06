import { FC, useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';

import { colorOfToys } from "shared/constants/colorOfToys";
import { shapesOfToys } from "shared/constants/shapesOfToys";
import { useRootDispatch, useRootSelector } from 'store';
import { toysActions } from 'store/toys';
import { toysAsyncActions } from "store/toys/actions";
import { toysSelectors } from 'store/toys/selectors';
import { ImagesFilter } from "../ImagesFilter/ImagesFilter";

type Props = {
    className?: string
}

const allFilters = ['shape', 'color', 'size', 'count', 'year', 'isLiked', 'sort']

export const Filters: FC<Props> = ({ className }) => {
    const toys = useRootSelector(toysSelectors.getToys)
    const dispatch = useRootDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const savedSeachParams = useRootSelector(toysSelectors.getSearchParamsString)

    const setSwitchFilters = (searchParams: URLSearchParams) => {
        const isSetFilters = allFilters.some(filter => !!searchParams.get(filter))

        let newFilterToys = [...toys];

        if (!isSetFilters) { dispatch(toysActions.setFilteredToyList(newFilterToys)) }

        ['shape', 'color', 'size'].forEach((param) => {
            const filters = searchParams.getAll(param)
            if (filters.length) {
                newFilterToys = newFilterToys.filter((toy) => {
                    return filters.includes(toy[param])
                })
                dispatch(toysActions.setFilteredToyList(newFilterToys))
            }
        })
    }

    useEffect((): any => {
        dispatch(toysAsyncActions.getInitialToyList())
            .then(() => {
                if (!!savedSeachParams) {
                    setSearchParams(new URLSearchParams(savedSeachParams))
                    savedSeachParams && setSwitchFilters(new URLSearchParams(savedSeachParams))
                } else {
                    dispatch(toysActions.setFilteredToyList(toys))
                }
            })
    }, [])


    useEffect(() => {
        setSwitchFilters(searchParams)
        return () => {
            dispatch(toysActions.setSearchParamsString(searchParams.toString()))
        }
    }, [searchParams, toys])

    return (
        <div className={className}>
            <ImagesFilter name='shape' title={'Форма'} valueList={shapesOfToys} className="shape"></ImagesFilter>
            <ImagesFilter name='color' title={'Цвет'} valueList={colorOfToys} className="color"></ImagesFilter>
            <ImagesFilter name='size' title={'Размер'} valueList={['small', 'average', 'big']} className="size"></ImagesFilter>
        </div>)
}