import React, { useContext } from 'react'
 import {CardContext} from '../context/CardContext';
const Card = ({title,desc,price,img}) => {
    return (
        <li className="list__item">
            <div className="card__img">
                <img src={img}/>
            </div>
            <div className="card__profile">
                <div className="card__title">
                    <h3 className="card__title-heading">{title}</h3>
                    <p className="card__title-price">${price}</p>
                </div>
                <div className="card__content">
                    {desc}
                </div>
            </div>
        </li>
    );
}

export default Card