import classNames from "classnames";
import { FC } from "react";
import { Icon } from "shared/components/Icon";

import s from '../ImagesFilter.module.scss'

type Props={
    image:string,
    className?:string,
    handleClick: (value:string)=>void
}

export const ImageFilterBtn: FC<Props> = ({image, className, handleClick}) => {
    return (
        <button className={classNames(s.btn, {[s[`filter__btn_${className}`]]:className})} onClick={()=>handleClick(image)}>
            <Icon name={image} height = {36} width ={36} />
        </button>
    )
}