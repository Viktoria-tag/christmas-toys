import classNames from "classnames";
import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { Icon } from "shared/components/Icon";
import { useFilterQuery } from "shared/hooks/useFiltersQuery";
import { translate } from "shared/utiles/translate";

import s from '../ImagesFilter.module.scss';

type Props = {
    value: string,
    className?: string,
    name: string
}


export const SwitchFilter: FC<Props> = ({ value, className, name }) => {
    const valueString = translate(value)
    const [params, setFilter, deleteFilter] = useFilterQuery(valueString, name)
    const [isChecked, setIsChecked] = useState(false)
    console.log(valueString)

    useEffect(() => {
        (params.includes(valueString)) ? setIsChecked(true) : setIsChecked(false)
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
        <label className={classNames(s.box, { [s[`box_type_${className}`]]: className }, { [s[`active`]]: isChecked })}>
            <input type='checkbox'
                checked={isChecked}
                className={s.input}
                onChange={setValue} />
            <Icon className={classNames(s.filter__icon, { [s[`filter__icon_${className}`]]: className })} name={value} height={36} width={36} />
        </label>
    )
}