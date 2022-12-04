import classNames from "classnames"
import { FC } from "react"
import { SwitchFilter } from "./SwitchFilter"

import s from './ImagesFilter.module.scss'

type FilterProps = {
    title: string,
    valueList: string[],
    className?: string,
    name: string,
}

export const ImagesFilter: FC<FilterProps> = ({ title, name, valueList, className }) => {


    return (
        <div className={s.filter}>
            <h3>{title}</h3>
            {valueList.map((value, index) => {
                return <SwitchFilter
                    key={index}
                    value={value}
                    className={className}
                    name={name}
                />
            }
            )}
        </div>)
}