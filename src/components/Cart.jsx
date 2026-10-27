import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useContext(CartContext);

  
  const handleWhatsAppCheckout = () => {

    const phoneNumber = "5581984869446"; 
    
    let message = "Olá! Gostaria de fazer o seguinte pedido na Doceria Açúcar & Afeto:\n\n";

    cart.forEach((item) => {
      message += `• ${item.quantity}x ${item.nome} (R$ ${(item.preco * item.quantity).toFixed(2)})\n`;
    });

    // Adiciona o valor total
    message += `\n*Total: R$ ${totalPrice.toFixed(2)}*`;

    // Codifica a mensagem para o formato de URL
    const encodedMessage = encodeURIComponent(message);

    // Cria o link do WhatsApp e abre numa nova aba
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <aside style={{ borderLeft: '1px solid #ddd', padding: '20px', width: '320px', background: '#fafafa' }}>
      <h3>Seu Carrinho</h3>
      {cart.length === 0 ? (
        <p style={{ color: '#666' }}>O carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
              <div>
                <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>{item.nome}</h4>
                <span style={{ fontSize: '12px', color: '#666' }}>R$ {item.preco.toFixed(2)} x {item.quantity}</span>
              </div>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                <button onClick={() => decreaseQuantity(item.id)} style={{ padding: '2px 6px' }}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} style={{ padding: '2px 6px' }}>+</button>
                <button onClick={() => removeFromCart(item.id)} style={{ background: '#d9534f', color: '#fff', border: 'none', padding: '3px 6px', borderRadius: '3px', cursor: 'pointer' }}>🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr style={{ margin: '15px 0' }} />
      <h4>Total: R$ {totalPrice.toFixed(2)}</h4>
      
      <button 
        disabled={cart.length === 0}
        onClick={handleWhatsAppCheckout}
        style={{ 
          width: '100%', 
          padding: '12px', 
          background: cart.length === 0 ? '#ccc' : '#25D366', // Cor verde clássica do WhatsApp
          color: '#fff', 
          fontWeight: 'bold',
          border: 'none', 
          borderRadius: '4px', 
          cursor: cart.length === 0 ? 'not-allowed' : 'pointer', 
          marginTop: '10px' 
        }}
      >
        Finalizar Pedido
      </button>
    </aside>
  );
}

export default Cart;