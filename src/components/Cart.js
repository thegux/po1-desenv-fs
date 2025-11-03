import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [notification, setNotification] = useState('');

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setNotification(`Quantidade de ${product.name} aumentada para ${product.quantity + 1}.`);
    clearNotificationAfterDelay();
  };

  const removeOneFromCart = (product) => {
    dispatch({ type: 'REMOVE_ONE_FROM_CART', payload: product });
    const newQty = product.quantity - 1;
    setNotification(
      newQty > 0
        ? `Quantidade de ${product.name} reduzida para ${newQty}.`
        : `${product.name} foi removido do carrinho.`
    );
    clearNotificationAfterDelay();
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    setNotification(`${product.name} foi removido do carrinho.`);
    clearNotificationAfterDelay();
  };

  const clearNotificationAfterDelay = () => {
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="cart">
      <h1>Seu carrinho</h1>

      <strong className="cart-notification" aria-atomic="true" role="status" aria-live="polite">
        {notification}
      </strong>

      {cart.length === 0 && <p>Carrinho vazio</p>}

      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: '1rem' }}>
          <span>
            <strong>{item.name}</strong> <br />
            Quantidade:{' '}
            <span aria-live="polite" aria-atomic="true">
              {item.quantity}
            </span>
          </span>

          <div style={{ display: 'inline-flex', gap: '0.5rem', marginLeft: '1rem' }}>
            <button aria-label={`Diminuir a quantidade de ${item.name} em uma unidade`} className="control" onClick={() => removeOneFromCart(item)}>-</button>
            <button aria-label={`Aumentar a quantidade de ${item.name} em uma unidade`} className="control" onClick={() => addToCart(item)}>+</button>
            <button aria-label={`Remover completamente ${item.name} do carrinho`} className="remove" onClick={() => removeFromCart(item)}>Remover</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;