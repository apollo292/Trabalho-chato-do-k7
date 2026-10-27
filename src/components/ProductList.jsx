import React from 'react';
import produtosData from '../data/produtos.json';
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <main style={{ padding: '20px' }}>
      <h2>Catálogo de Doces</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '15px' }}>
        {produtosData.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </main>
  );
}

export default ProductList;