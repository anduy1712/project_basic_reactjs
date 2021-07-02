import React, { useContext } from 'react'
import Card from './Card'
import {CardContext} from '../context/CardContext';

const ListCard = () => {
    const {showData} = useContext(CardContext);
    return (
        <div className="listcard">
            <ul className="list__cards">
                {showData.map((card,index) => {
                    return <Card key={card.id} id={card.id} title={card.title} price={card.price} img={card.img} desc={card.desc}/>
                })}
                
                

            </ul>
           
        </div>
    );
}

export default ListCard