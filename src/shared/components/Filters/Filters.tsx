import { FC, useEffect, useState } from "react";
import { useHref, useSearchParams } from 'react-router-dom';

import { colorOfToys } from "shared/constants/colorOfToys";
import { shapesOfToys } from "shared/constants/shapesOfToys";
import { useRootDispatch, useRootSelector } from 'store';
import { toysActions } from 'store/toys';
import { toysAsyncActions } from "store/toys/actions";
import { toysSelectors } from 'store/toys/selectors';
import { ImagesFilter } from "../ImagesFilter/ImagesFilter";
import { MultiRangeSlider } from "../MultiRangeSlider";
import { YearsRangeSlider } from "../YearsRangeSlider";

type Props = {
    className?: string
}

const allFilters = ['shape', 'color', 'size', 'count', 'minYear', 'maxYear', 'isLiked', 'sort']

export const Filters: FC<Props> = ({ className }) => {
    const toys = useRootSelector(toysSelectors.getToys)
    const dispatch = useRootDispatch()
    const [searchParams, setSearchParams] = useSearchParams();
    const savedSeachParams = useRootSelector(toysSelectors.getSearchParamsString)

    const [startMinValue, setStartMinValue] = useState<number>(1900)
    const [startMaxValue, setStartMaxValue] = useState<number>(new Date().getFullYear())
    



    const setSwitchFilters = (searchParams: URLSearchParams) => {
        const isSetFilters = allFilters.some(filter => !!searchParams.get(filter))
        let newFilterToys = [...toys];
        const newStartMinValue = searchParams.get('minYear') || 1900
        const newStartMaxValue = searchParams.get('maxYear') || new Date().getFullYear()

        setStartMinValue(Number(newStartMinValue))
        setStartMaxValue(Number(newStartMaxValue))

        if (!isSetFilters) { dispatch(toysActions.setFilteredToyList(newFilterToys)) }
        else {
            ['shape', 'color', 'size'].forEach((param) => {
                const filters = searchParams.getAll(param)
                if (filters.length) {
                    newFilterToys = newFilterToys.filter((toy) => {
                        return filters.includes(toy[param])
                    })
                    dispatch(toysActions.setFilteredToyList(newFilterToys))
                }
            });
            newFilterToys = newFilterToys.filter((toy) => {
                return !!((toy['year'] >= newStartMinValue) && (toy['year'] <= newStartMaxValue))
            })
            dispatch(toysActions.setFilteredToyList(newFilterToys))
        }
    }

    useEffect(() => {
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
    }, [searchParams, toys, savedSeachParams])

    return (
        <div className={className}>
            <ImagesFilter name='shape' title={'Форма'} valueList={shapesOfToys} className="shape"></ImagesFilter>
            <ImagesFilter name='color' title={'Цвет'} valueList={colorOfToys} className="color"></ImagesFilter>
            <ImagesFilter name='size' title={'Размер'} valueList={['small', 'average', 'big']} className="size"></ImagesFilter>
            <YearsRangeSlider title={'Год выпуска'} name='issueYears' startMinValue={startMinValue}
                startMaxValue={startMaxValue} />
        </div>)
}