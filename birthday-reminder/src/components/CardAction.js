import React, { useContext } from 'react';
import {CardContext} from '../context/CardContext';

const CardAction = () => {
    const {deleteCard} = useContext(CardContext);
    return (
        <button onClick={deleteCard} className="btn btn-primary">Clear All</button>
    );
}
export default CardAction
