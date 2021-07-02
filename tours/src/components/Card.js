import React,{useState,useContext} from 'react';
import {CardContext} from '../context/CardContext';
const Card = ({id,name,info,price,img}) => {
    const [readMore,setReadMore] = useState(false)
    const {deleteCard} = useContext(CardContext);
    return (
        <div className="card">
            <figure className="card__img">
                <img src={img}/>
            </figure>
            <div className="card__profile">
                <div className="card__title">
                    <h3>{name}</h3>
                    <p>${price}</p>
                </div>
                <p className="card__content">
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button className="btn02"  href="#" onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less' : 'Read more'}</button>
                </p>
                <button onClick={() => deleteCard(id)} className="btn btn-primary">Not interested</button>
            </div>
        </div>
    );
}
export default Card