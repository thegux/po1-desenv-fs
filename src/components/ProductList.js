import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const [notification, setNotification] = useState('');

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setNotification(`✅ ${product.name} foi adicionado ao carrinho!`);

    // Remove a notificação após 3 segundos
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="productListPage">
      <h1>Lista de Produtos</h1>

        <strong
          className="notification"
          role="status"
          aria-atomic="true"
          aria-live="polite"
        >
          {notification}
        </strong>

      <div className="productList">
        {products.map((product) => (
          <div className="productItem" key={product.id}>
            <h2>{product.name}</h2>
            <button
              aria-label={`Adicionar ${product.name} ao carrinho`}
              onClick={() => addToCart(product)}
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;