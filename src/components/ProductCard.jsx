import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ produto }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', width: '200px', textAlign: 'center', background: '#fff' }}>
      <img src={produto.imagem} alt={produto.nome} style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3>{produto.nome}</h3>
      <p style={{ fontSize: '14px', color: '#666' }}>{produto.descricao}</p>
      <span style={{ fontWeight: 'bold', color: '#d9534f' }}>R$ {produto.preco.toFixed(2)}</span>
      <br />
      <button 
        onClick={() => addToCart(produto)}
        style={{ marginTop: '10px', padding: '8px 12px', background: '#5cb85c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

export default ProductCard;