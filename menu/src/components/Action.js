import React, { useContext } from 'react'
 import {CardContext} from '../context/CardContext';

const Action = () => {
    const {filterCate} = useContext(CardContext);
    return (
        <div className="action">
           <h1 className="title">Our Menu</h1>
           <div className="line"></div>
           <li className="list">
               <li className="list__item">
                   <a onClick={() => filterCate('all')} className="btn">All</a>
               </li>
               <li className="list__item">
                   <a onClick={() => filterCate('breakfast')} className="btn">Breakfast</a>
               </li>
               <li className="list__item">
                   <a onClick={() => filterCate('lunch')} className="btn">Lunch</a>
               </li>
               <li className="list__item">
                   <a onClick={() => filterCate('shakes')} className="btn">Shakes</a>
               </li>
           </li>
        </div>
    );
}

export default Action