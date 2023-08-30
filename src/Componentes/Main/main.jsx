import { useState } from 'react';
import DetalleProd from './DetalleProd';
import Cart from './Cart';

const MainComponent = () => {
  const [cartItems, setCartItems] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCartItems([...cartItems, producto]);
  };

  return (
    <div>
      <DetalleProd agregarAlCarrito={agregarAlCarrito} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default MainComponent;
