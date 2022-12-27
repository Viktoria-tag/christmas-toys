import { useRootDispatch } from "store"
import { toysActions } from "store/toys"
import { Toy } from "typings/global"

export const filterByCheckedParameters = (searchParams: URLSearchParams, newFilterToys: Toy[], dispatch: any):Toy[] => {
    ['shape', 'color', 'size'].forEach((param) => {
        const filters = searchParams.getAll(param)
        if (filters.length) {
            newFilterToys = newFilterToys.filter((toy) => {
                const parametr = toy[param as keyof Toy]
                return filters.includes(parametr as string)
            })
        }
    })
    return newFilterToys
}

export const filterByYears = (searchParams: URLSearchParams, newFilterToys: Toy[], dispatch: any):Toy[] => {
    const newStartMinValue = searchParams.get('minYear') || 1900
    const newStartMaxValue = searchParams.get('maxYear') || new Date().getFullYear()
    
    newFilterToys= newFilterToys.filter((toy) => {
        return !!((toy['year'] >= newStartMinValue) && (toy['year'] <= newStartMaxValue))
    })
    return newFilterToys
}