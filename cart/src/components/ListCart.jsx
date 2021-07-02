import React,{useContext,useEffect} from "react";
import ItemCart from "./ItemCart";
import TotalCart from "./TotalCart";
import { CartContext } from "../contexts/CartContext";
const ListCart = () => {
  const {carts} = useContext(CartContext)
  const item = carts.map(cart => {
    return <ItemCart key={cart.id} id={cart.id} title={cart.title} price={cart.price} img={cart.img} amount={cart.amount}/>
  })
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="shopping-cart">
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price">Price</label>
          <label className="product-quantity">Quantity</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price">Total</label>
        </div>
        {item}
        <TotalCart/>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default ListCart;
