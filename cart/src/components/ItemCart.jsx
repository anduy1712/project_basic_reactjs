import React,{useContext} from 'react'
import { CartContext } from '../contexts/CartContext'
import { REMOVE_CART } from '../reducers/types'
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
const ItemCart = ({id,title,name,price,img,amount}) => {
    const cartContext = useContext(CartContext)
    const {dispatch,increaseCart,decreaseCart} = cartContext;
    return (
        <div className="product">
          <div className="product-image">
            <img src={img} alt=""/>
          </div>
          <div className="product-details">
            <div className="product-title">{title}</div>
            <p className="product-description">
              The best dog bones of all time. Holy crap. Your dog will be
              begging for these things! I got curious once and ate one myself.
              I'm a fan.
            </p>
          </div>
          <div className="product-price">{price}</div>
          <div className="product-quantity">
            {/* <input type="text" defaultValue="1" value={amount} /> */}
            <p>{amount}</p>
            <div className="vetical-icon">
              <AiFillCaretUp onClick={() => increaseCart(id)} className="quantity-icon"></AiFillCaretUp>
              <AiFillCaretDown onClick={() => decreaseCart(id)} className="quantity-icon"></AiFillCaretDown>
            </div>
          </div>
          <div className="product-removal">
            <button className="remove-product" onClick={()=>{
              dispatch({
                type: REMOVE_CART,
                payload: {id}
              })
            }}>Remove</button>
          </div>
          <div className="product-line-price">{parseFloat(amount * price).toFixed(2)}</div>
        </div>
    )
}

export default ItemCart
