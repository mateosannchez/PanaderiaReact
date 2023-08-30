import DetalleProd from './detalleProd';
import { productos } from '../../Productos/productos';
import Cart from '../Carrito/cart';

const MiComponentePadre = () => {

  return (
    <div>

      {productos.map((producto) => (
        <DetalleProd key={producto.id} producto={producto} />,
        <Cart key={producto.id} producto={producto} />
      ))}
      
    </div>
  );
};

export default MiComponentePadre;
