import { FC } from "react";
import { Icon } from "shared/components/Icon";

import s from '../ImagesFilter.module.scss'

export const ImageFilterBtn: FC<{image:string}> = ({image}) => {
    return (
        <button className={s.btn}>
            <Icon name={image} className="shapeFilter" height = {36} width ={36} />
        </button>
    )
}