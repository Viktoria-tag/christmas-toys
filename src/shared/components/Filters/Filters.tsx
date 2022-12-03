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
    <ImagesFilter imageList={shapesOfToys}></ImagesFilter>
    </>)
}