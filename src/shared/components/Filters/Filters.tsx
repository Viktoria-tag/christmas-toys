import classNames from 'classnames';
import { FC } from "react";
import { colorOfToys } from "shared/constants/colorOfToys";
import { shapesOfToys } from "shared/constants/shapesOfToys";
import { ImagesFilter } from "../ImagesFilter/ImagesFilter";

type SortingDirection = 'highest' | 'lowest';

type Props={
    className?:string
}
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
export const Filters:FC<Props> = ({className}) => {


    return (
    <div className={className}>
    <ImagesFilter name='shape' title={'Форма'} valueList={shapesOfToys} className="shape"></ImagesFilter>
    <ImagesFilter name='color' title={'Цвет'} valueList={colorOfToys} className="color"></ImagesFilter>
    <ImagesFilter name='size' title={'Размер'} valueList={['small','average', 'big']} className="size"></ImagesFilter>
    </div>)
}