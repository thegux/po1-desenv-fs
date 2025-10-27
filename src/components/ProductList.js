import React from 'react';
import { useDispatch } from 'react-redux';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="productListPage">
      <h1>Lista de Produtos</h1>
      <div className="productList">
        {products.map(product => (
          <div className="productItem" key={product.id}>
            <h2>{product.name}</h2>
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    </div>
  );

};

export default ProductList;