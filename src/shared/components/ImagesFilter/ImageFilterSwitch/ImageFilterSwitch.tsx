import classNames from "classnames";
import { ChangeEvent, ChangeEventHandler, MouseEvent, useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import { Icon } from "shared/components/Icon";

import s from '../ImagesFilter.module.scss'

type Props = {
    value: string,
    className?: string,
    name: string
}


export const ImageFilterSwitch: FC<Props> = ({ value, className, name }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const params = searchParams.getAll(name)
    const [isChecked, setIsChecked] = useState(false)
    useEffect(() => {
        (params.includes(value)) ? setIsChecked(true) : setIsChecked(false)
    }, [])

    const setValue = () => {

        if (!isChecked) {
            searchParams.append(name, value)
            setSearchParams(searchParams)
            setIsChecked(true)
        }
        else {
            const updatedSearchParams = new URLSearchParams(
                [...searchParams].filter(
                    ([key, val]) => key !== name || val !== value
                )
            )
            setSearchParams(updatedSearchParams)
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