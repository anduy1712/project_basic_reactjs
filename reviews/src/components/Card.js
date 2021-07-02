import React,{useContext} from 'react';
import {CardContext} from '../context/CardContext'

const Card = () => {
    const {cards,name,job,image,text,preNumber,nextNumber,randomNumber} = useContext(CardContext);
    return (
        <div className="card">
            <figure className="card__img">
                <img src={image}/>               
            </figure>
           <div className="card__profile">
                <h3 className="card__name">{name}</h3>
                <p className="card__pos">{job}</p>
                <p className="card__content">
                {text}
                </p>
                <div className="card__action">
                    <i onClick={preNumber} className="fas fa-chevron-left"></i>
                    <i onClick={nextNumber} className="fas fa-chevron-right"></i>
                </div>
                <button onClick={randomNumber} className="btn btn-primary">Suprise Me</button>
           </div>
        </div>
    );
}

export default Card