import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Header() {
  const { totalItems } = useContext(CartContext);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: '#f8d7da', borderBottom: '1px solid #f5c6cb' }}>
      <h1>Doceria Açúcar & Afeto</h1>
      <span style={{ padding: '10px 15px', background: '#fff', borderRadius: '5px', fontWeight: 'bold' }}>
        🛒 Carrinho ({totalItems})
      </span>
    </header>
  );
}

export default Header;