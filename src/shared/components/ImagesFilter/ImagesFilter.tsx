import classNames from "classnames"
import { FC } from "react"
import { Icon } from "../Icon"
import { ImageFilterBtn } from "./ImageFilterBtn"

import s from './ImagesFilter.module.scss'

type FilterProps = {
    title: string,
    imageList: string[],
    className?: string
}

export const ImagesFilter: FC<FilterProps> = ({ title, imageList, className }) => {
    return (<>
        <h3>{title}</h3>
        {imageList.map((image, index) => <ImageFilterBtn key={index} image={image} className={className}/>)}
    </>)
}