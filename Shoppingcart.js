import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, removeFromCart } from '../redux/actions';

const ShoppingCart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(increment(item));
    };

    const handleDecrement = (item) => {
        dispatch(decrement(item));
    };

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => handleIncrement(item)}>+</button>
                            <button onClick={() => handleDecrement(item)}>-</button>
                            <button onClick={() => handleRemove(item)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total Cost: ${totalCost}</h3>
                    <button>Checkout (Coming Soon)</button>
                    <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
