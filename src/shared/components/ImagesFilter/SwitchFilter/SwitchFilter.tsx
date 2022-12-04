import classNames from "classnames";
import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { Icon } from "shared/components/Icon";
import { useFilterQuery } from "shared/hooks/useFiltersQuery";

import s from '../ImagesFilter.module.scss'

type Props = {
    value: string,
    className?: string,
    name: string
}


export const SwitchFilter: FC<Props> = ({ value, className, name }) => {

    const [params, setFilter, deleteFilter] = useFilterQuery(value, name)
    const [isChecked, setIsChecked] = useState(false)
    
    useEffect(() => {
        (params.includes(value)) ? setIsChecked(true) : setIsChecked(false)
    }, [])

    const setValue = () => {
        if (!isChecked) {
            setFilter()
            setIsChecked(true)
        }
        else {
            deleteFilter()
            setIsChecked(false)
        }
    }

    return (
        <label>
            <input type='checkbox'
                checked={isChecked}
                className={classNames(s.btn, { [s[`filter__btn_${className}`]]: className },)}
                onChange={setValue} />
            <Icon name={value} height={36} width={36} />
        </label>
    )
}