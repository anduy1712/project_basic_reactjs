import React from 'react';

const CardItem = ({id,name,age,image}) => {
    return (
        <li className="card__item">
            <img src={image}/>
            <div className="card__profile">
                <p className="card__name">{name}</p>
                <p className="card__age">{age} years</p>
            </div>
        </li>
    );
}
export default CardItem
