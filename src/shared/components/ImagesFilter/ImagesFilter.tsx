import classNames from "classnames"
import { FC } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Icon } from "../Icon"
import { ImageFilterSwitch } from "./ImageFilterSwitch"

import s from './ImagesFilter.module.scss'

type FilterProps = {
    title: string,
    valueList: string[],
    className?: string,
    name: string,
}

export const ImagesFilter: FC<FilterProps> = ({ title, name, valueList, className }) => {


    return (<div>
        <h3>{title}</h3>
        {valueList.map((value, index) => {
            return <ImageFilterSwitch
                key={index}
                value={value}
                className={className}
                name={name}
            />
        }
        )}
    </div>)
}