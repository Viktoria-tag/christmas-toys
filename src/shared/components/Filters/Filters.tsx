import { SavedSearch } from "App";
import { FC, useEffect, useState, useContext, useLayoutEffect, useRef } from "react";
import { useSearchParams } from 'react-router-dom';

import { colorOfToys } from "shared/constants/colorOfToys";
import { shapesOfToys } from "shared/constants/shapesOfToys";
import { useRootDispatch, useRootSelector } from 'store';
import { toysActions } from 'store/toys';
import { toysSelectors } from 'store/toys/selectors';
import { ImagesFilter } from "../ImagesFilter/ImagesFilter";
import { YearsRangeSlider } from "../YearsRangeSlider";
import { filterByCheckedParameters, filterByYears } from "./utils";

type Props = {
    className?: string
}

const allFilters = ['shape', 'color', 'size', 'count', 'minYear', 'maxYear', 'isLiked', 'sort']

export const Filters: FC<Props> = ({ className }) => {

    const toys = useRootSelector(toysSelectors.getToys)
    const dispatch = useRootDispatch()
    const mem = useRef<any>(null);

    const [startMinYearValue, setStartMinValue] = useState<number>(1900)
    const [startMaxYearValue, setStartMaxValue] = useState<number>(new Date().getFullYear())
    const [searchParams, setSearchParams] = useSearchParams();
    const savedSeach = useContext(SavedSearch);

    const setFilters = (searchParams: URLSearchParams) => {

        const isSetFilters = allFilters.some(filter => !!searchParams.get(filter))
        const newFilteredToys = [...toys];
        const newStartMinValue = searchParams.get('minYear')
        const newStartMaxValue = searchParams.get('maxYear')

        newStartMinValue && setStartMinValue(Number(newStartMinValue))
        newStartMaxValue && setStartMaxValue(Number(newStartMaxValue))

        if (!isSetFilters) {
            dispatch(toysActions.setFilteredToyList(newFilteredToys))
            setSearchParams(searchParams)
        }
        else {

            let filteredToys = filterByCheckedParameters(searchParams, newFilteredToys, dispatch)
            filteredToys = filterByYears(searchParams, filteredToys, dispatch)
            dispatch(toysActions.setFilteredToyList(filteredToys))
        }
    }

    useEffect(() => {
        setFilters(searchParams)
        mem.current = searchParams
    }, [searchParams, toys])

    useEffect(() => {
        const savedSeachParams = savedSeach?.savedSearchString
        if (!!savedSeachParams) {
            setSearchParams(new URLSearchParams(savedSeachParams))
            setFilters(new URLSearchParams(savedSeachParams))
            mem.current = new URLSearchParams(savedSeachParams)
        } else {
            setSearchParams(searchParams)        
            mem.current = searchParams
        }
        return () => {
            savedSeach!.setSearchParamsString(mem.current.toString())      
        }
    }, [])

    return (
        <div className={className}>
            <ImagesFilter name='shape' title={'Форма'} valueList={shapesOfToys} className="shape" />
            <ImagesFilter name='color' title={'Цвет'} valueList={colorOfToys} className="color" />
            <ImagesFilter name='size' title={'Размер'} valueList={['small', 'average', 'big']} className="size" />
            <YearsRangeSlider
                title={'Год выпуска'}
                name='issueYears'
                startMinValue={startMinYearValue}
                startMaxValue={startMaxYearValue}
            />
        </div>)
}