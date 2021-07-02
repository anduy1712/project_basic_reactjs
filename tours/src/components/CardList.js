import React,{useContext} from 'react';
import Card from './Card'
import {CardContext} from '../context/CardContext';

const CardList = () => {
    const {cards,refresh} = useContext(CardContext);
    
    return (
        <div className="List">
            {cards.length > 0 ? <h1 class="title">Our Tour</h1> : ''}
            {cards.length == 0 ? <div class="noCard">
            <h3 class="title">No Tours Left</h3>
            <button class="btn btn-primary02" onClick={refresh}>Refresh</button> 
           </div> :  cards.map((card,index) => {
                return <Card key={card.id} id={card.id} name={card.name} info={card.info} img={card.image} price={card.price} />
            })}
           
           
        </div>
    );
}
export default CardList