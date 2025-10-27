import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeOneFromCart = (product) => {
    dispatch({ type: 'REMOVE_ONE_FROM_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div className="cart">
      <h1>Seu carrinho</h1>

      {cart.length === 0 && <p>Carrinho Vazio</p>}

      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: '1rem' }}>
          <span><strong>{item.name}</strong> <br/> Quantidade: {item.quantity}</span>
          <div style={{ display: 'inline-flex', gap: '0.5rem', marginLeft: '1rem' }}>
            <button className="control" onClick={() => removeOneFromCart(item)}>-</button>
            <button className="control" onClick={() => addToCart(item)}>+</button>
            <button className="remove" onClick={() => removeFromCart(item)}>Remover</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;