import classNames from 'classnames';
import { FC } from 'react';
import { Toy } from 'typings/global';

import s from './ToyCard.module.scss'

interface PropTypes  {
    toy: Toy,
}


export const ToyCard: FC<PropTypes> = ({ toy }) => {
    console.log(toy)
    return (
        <>
            <li className={s.card} >
                <h2>{toy.name}</h2>
                <div>

                    <img src={`/assets/images/toys/${toy.id}.png`} alt={toy.name} />

                    <ul className="toys-option">
                        <li><span>Колличество:</span><span> {toy.count}</span></li>
                       
                        <li><span>Форма:</span><span> {toy.shape}</span></li>
                        <li><span>Цвет:</span><span> {toy.color}</span></li>
                        <li><span>Размер:</span><span> {toy.size}</span></li>
                        <li><span>Любимая:</span><span> {toy.favorite ? ' да' : ' нет'}</span></li>
                        {/* <li><button className={classNames()}>{toy.isSelect ? 'Удалить из выбранных' : 'Добавить в выбранные'}</button></li> */}
                    </ul>
                </div>
            </li>
        </>
    )
}