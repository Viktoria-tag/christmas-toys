import classNames from 'classnames';
import { FC } from "react";
import { useSearchParams } from 'react-router-dom';
import { colorOfToys } from "shared/constants/colorOfToys";
import { shapesOfToys } from "shared/constants/shapesOfToys";
import { ImagesFilter } from "../ImagesFilter/ImagesFilter";

type Props={
    className?:string
}

export const Filters:FC<Props> = ({className}) => {
  

    return (
    <div className={className}>
    <ImagesFilter name='shape' title={'Форма'} valueList={shapesOfToys} className="shape"></ImagesFilter>
    <ImagesFilter name='color' title={'Цвет'} valueList={colorOfToys} className="color"></ImagesFilter>
    <ImagesFilter name='size' title={'Размер'} valueList={['small','average', 'big']} className="size"></ImagesFilter>
    </div>)
}