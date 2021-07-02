import React,{Fragment, useContext} from 'react';
import CardItem from './CardItem'
import CardAction from './CardAction'
import {CardContext} from '../context/CardContext'
const Card = () => {
    const {cards} = useContext(CardContext);
    
    return (
        <div className="card">
            <h1>{cards.length} birthdays today</h1>
            <ul className="card__list">
                {cards.map((card,index) => {
                    return  <CardItem key={index}  name={card.name} age={card.age} image={card.image}/>
                })}
               
                
            </ul>
            <CardAction/>
        </div>
    );
}

export default Card;