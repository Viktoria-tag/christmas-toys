import classNames from 'classnames';
import { FC, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { colorOfToys } from "shared/constants/colorOfToys";
import { shapesOfToys } from "shared/constants/shapesOfToys";
import { useRootDispatch, useRootSelector } from 'store';
import { toysActions } from 'store/toys';
import { toysSelectors } from 'store/toys/selectors';
import { ImagesFilter } from "../ImagesFilter/ImagesFilter";

type Props = {
    className?: string
}

export const Filters: FC<Props> = ({ className }) => {

    const toys = useRootSelector(toysSelectors.getToys)
    const dispatch = useRootDispatch()
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect((): any => {
        const filtersArray = Array.from(searchParams.values())
        if (filtersArray.length === 0) {
            dispatch(toysActions.setFilteredToyList(toys))
        }
        else {
            let newFilterToys = [...toys];
            ['shape', 'color', 'size'].forEach((param) => {
                const filters = searchParams.getAll(param)
                if (filters.length) {
                    newFilterToys = newFilterToys.filter((toy) => {
                        return filters.includes(toy[param])
                    })
                }
            })
            dispatch(toysActions.setFilteredToyList(newFilterToys))
        }
        return () => {
            console.log(searchParams.getAll('shape'))
            const st = searchParams.toString()
            console.log(st)
            // dispatch(toysActions.setSearchParamsString(searchParams.toString()))
        }
    }, [])


    useEffect(() => {
        let newFilterToys = [...toys];

        ['shape', 'color', 'size'].forEach((param) => {
            const filters = searchParams.getAll(param)
            if (filters.length) {
                newFilterToys = newFilterToys.filter((toy) => {
                    return filters.includes(toy[param])
                })
            }
        })

        dispatch(toysActions.setFilteredToyList(newFilterToys))

    }, [searchParams, toys])

    return (
        <div className={className}>
            <ImagesFilter name='shape' title={'Форма'} valueList={shapesOfToys} className="shape"></ImagesFilter>
            <ImagesFilter name='color' title={'Цвет'} valueList={colorOfToys} className="color"></ImagesFilter>
            <ImagesFilter name='size' title={'Размер'} valueList={['small', 'average', 'big']} className="size"></ImagesFilter>
        </div>)
}