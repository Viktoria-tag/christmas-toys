export type ToyShap =
  'шар' | 'фигурка' | 'снежинка' | 'шишка' | 'колокольчик';

export type Color =
  'желтый' | 'белый' | 'красный' | 'синий' | 'зелёный';

export type Size =
  'малый' | 'средний' | 'большой';

export type Toy = {
  id: number,
  name: string,
  year: number,
  shape: ToyShap,
  color: Color | Color[],
  size: Size,
  favorite: boolean,
  count: number,
  num:number,
}

