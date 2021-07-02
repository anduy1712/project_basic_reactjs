import React, { useContext } from 'react'
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";
 import CardItem from './CardItem'
 import {CardContext} from '../context/CardContext';
const Card = () => {
    const {cards} = useContext(CardContext);

    const style = {fontSize: '30px',color: '#b4345c'}
    return (
        <div className="card">
            <div className="card__header">
                <h3>Questions And Answers About Login</h3>
            </div>
            <div className="card__content">
                <ul className="card__list">
                    {cards.map((item,index) => {
                        return <CardItem key={item.id} title={item.title} info={item.info}/>
                    })}
                    
                </ul>
            </div>
        </div>
    );
}

export default Card