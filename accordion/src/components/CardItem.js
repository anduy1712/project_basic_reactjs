import React, { useState } from 'react'
import { AiOutlinePlusCircle,AiOutlineMinusCircle } from "react-icons/ai";
 
const CardItem = ({title,info}) => {
    const [content,setContent] = useState(false);
    const openContent = () => {
        setContent(!content)
    }
    const style = {fontSize: '30px',color: '#b4345c'}
    return (
        <li className="card__item">
            <div className="card__item-header">
                <p className="title">
                    {title}
                </p>
                {content ? <AiOutlineMinusCircle onClick={openContent} style={style}/> : <AiOutlinePlusCircle onClick={openContent} style={style}/> }
                
            </div>
            {content ? <p className="content">{info}</p> : '' }
            
        </li>
    );
}

export default CardItem