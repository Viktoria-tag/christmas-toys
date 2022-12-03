import classNames from 'classnames';
import { FC } from "react";
import { colorOfToys } from "shared/constants/colorOfToys";
import { shapesOfToys } from "shared/constants/shapesOfToys";
import { ImagesFilter } from "../ImagesFilter/ImagesFilter";

type SortingDirection = 'highest' | 'lowest';

type Props={
    className?:string
}
type Filters = {
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
console.log(className)
    return (
    <div className={className}>
    <ImagesFilter title={'Форма'} imageList={shapesOfToys}></ImagesFilter>
    <ImagesFilter title={'Цвет'} imageList={colorOfToys} className="color"></ImagesFilter>
    <ImagesFilter title={'Размер'} imageList={['ball2','ball2','ball2']} className="size"></ImagesFilter>
    </div>)
}