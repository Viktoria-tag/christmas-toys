import classNames from "classnames"
import { FC, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useFilterQuery } from "shared/hooks/useFiltersQuery"
import { Icon } from "../Icon"
import { ImageFilterBtn } from "./ImageFilterBtn"

import s from './ImagesFilter.module.scss'

type FilterProps = {
    title: string,
    valueList: string[],
    className?: string,
    name: string,
}

export const ImagesFilter: FC<FilterProps> = ({ title, name, valueList, className }) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const setValue = ( value:string) => {
        const search: { [key: string]: any } = {}
        search[name] = value
        setSearchParams(search, { replace: true })
    }

    return (<div>
        <h3>{title}</h3>
        {valueList.map((value, index) => {
            return <ImageFilterBtn
                key={index}
                image={value}
                className={className}
                handleClick={setValue} />
        }
        )}
    </div>)
}