import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div className="cart">
      <h1>Seu carrinho</h1>
      {cart.length === 0 && <p>Carrinho Vazio</p>}
      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );

};

export default Cart;