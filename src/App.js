import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import styles from './App.css';

const products = [
  { id: 1, name: 'Book 1' },
  { id: 2, name: 'Book 2' }
];

const App = () => {
  return (
    <Router>
      <header>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link to="/">Página Inicial</Link>
          <Link to="/cart">Carrinho</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;