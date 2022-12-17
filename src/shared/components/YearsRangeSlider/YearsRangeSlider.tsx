import { FC, useEffect, useState, SetStateAction } from 'react';

import { MultiRangeSlider } from '../MultiRangeSlider';

interface YearsRangeSliderProps {
    name: string;
    title: string;
    startMinValue: number;
    startMaxValue: number
}

export const YearsRangeSlider: FC<YearsRangeSliderProps> = ({ title,  startMinValue, startMaxValue}) => {

    return (<>
        <h3>{title}</h3>
        <MultiRangeSlider
            min={1900}
            max={new Date().getFullYear()}
            minRangeName={'minYear'}
            maxRangeName={'maxYear'}
            startMinValue={startMinValue}
            startMaxValue={startMaxValue}
        />
    </>)
}