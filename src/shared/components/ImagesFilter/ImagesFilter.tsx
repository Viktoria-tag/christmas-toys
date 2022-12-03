import { FC } from "react"
import { Icon } from "../Icon"
import { ImageFilterBtn } from "./ImageFilterBtn"

type FilterProps = {
    imageList: string[],
}

export const ImagesFilter: FC<FilterProps> = ({ imageList }) => {
    return (<>
        <h3>Форма</h3>
        {imageList.map((image, index) => <ImageFilterBtn key={index} image={image} />)}
    </>)
}