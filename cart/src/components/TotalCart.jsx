import React,{useContext} from "react";
import { CartContext } from "../contexts/CartContext";
const TotalCart = () => {
    const {total} = useContext(CartContext);
    const tax = 0.05 * total;
    const shipping = total ? 15.00 : 0;
  return (
    <div className="totals">
      <div className="totals-item">
        <label>Subtotal</label>
        <div className="totals-value" id="cart-subtotal">
          {total}
        </div>
      </div>
      <div className="totals-item">
        <label>Tax (5%)</label>
        <div className="totals-value" id="cart-tax">
          {parseFloat(tax).toFixed(2)}
        </div>
      </div>
      <div className="totals-item">
        <label>Shipping</label>
        <div className="totals-value" id="cart-shipping">
          {total ? shipping : '0'}
        </div>
      </div>
      <div className="totals-item totals-item-total">
        <label>Grand Total</label>
        <div className="totals-value" id="cart-total">
          {parseFloat(total + tax + shipping).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
