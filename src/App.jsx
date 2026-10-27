import React from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Header />
        <div style={{ display: 'flex', minHeight: '80vh', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <ProductList />
          </div>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;