import { FC } from 'react';
import { Toy } from 'typings/global';

import s from './ToyCard.module.scss'

interface PropTypes {
    toy: Toy,
}

export const ToyCard: FC<PropTypes> = ({ toy }) => {
    const image = require(`assets/images/toys/${toy.num}.png`)
    return (

        <article className={s.toy}>
            <h2>{toy.name}</h2>
            <div className={s.toy__twoColumn}>
                <img src={image} alt={toy.name} className={s.toy__image} />

                <ul>
                    <li><span className={s.toy__count}>Колличество:</span><span> {toy.count}</span></li>
                    <li><span className={s.toy__shape}>Форма:</span><span> {toy.shape}</span></li>
                    <li><span className={s.toy__color}>Цвет:</span><span> {toy.color}</span></li>
                    <li><span className={s.toy__size}>Размер:</span><span> {toy.size}</span></li>
                    <li><span className={s.toy__like}>Любимая:</span><span> {toy.favorite ? ' да' : ' нет'}</span></li>
                    {/* TODO добавить выделение карточки для определения игрушки на елку
                     <button className={s.toy__setLike}>{toy.isSelect ? 'Удалить из выбранных' : 'Добавить в выбранные'}</button> </li>*/}

                </ul>
            </div>
        </article>

    )
}