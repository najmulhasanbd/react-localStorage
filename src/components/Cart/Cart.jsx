/* eslint-disable react/prop-types */
import React from 'react';
import "../Cart/Cart";

const Cart = ({ cart, handleRemoveCartFromLS }) => {
    return (
        <div>
            <div>Cart: {cart.length} Items</div>
            <div className="cartBottol">
                {cart.map((bottol) => (
                    <div key={bottol.id} className="cartItem">
                        <img src={bottol.img} alt={bottol.name} />
                        <button onClick={() => handleRemoveCartFromLS(bottol.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
