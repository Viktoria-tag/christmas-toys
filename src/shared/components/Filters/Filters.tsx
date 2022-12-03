import { colorOfToys } from "shared/constants/colorOfToys";
import { shapesOfToys } from "shared/constants/shapesOfToys";
import { ImagesFilter } from "../ImagesFilter/ImagesFilter";

type SortingDirection = 'highest' | 'lowest';

export const Filters = () => {
    type Filters = {
        shape: string;
        color?: string;
        size?: string;
        isLIke?: boolean;
        year?: number;
        quantity?: number;
        sortByName?: SortingDirection | null;
        sortByQuantity?: SortingDirection | null;
    }
    return (<>
    <ImagesFilter title={'Форма'} imageList={shapesOfToys}></ImagesFilter>
    <ImagesFilter title={'Цвет'} imageList={colorOfToys} className="color"></ImagesFilter>
    <ImagesFilter title={'Размер'} imageList={['ball2','ball2','ball2']} className="size"></ImagesFilter>
    </>)
}