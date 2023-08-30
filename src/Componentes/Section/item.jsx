import "../../App.css"
import { useState } from 'react';
import { productos } from '../../Productos/productos';


const item = () => {

  const [tipoProducto, setTipoProducto] = useState('todos');

  const productosFiltrados = tipoProducto === 'todos' ? productos : productos.filter(producto => producto.marca === tipoProducto);

  return (
    <div className="item__display">
      {productosFiltrados.map((producto) => (
        <div key={producto.id}>

          <div className="item">
            <a href="">

              <div>
                <img className="item__img" src={producto.IMG} alt={producto.modelo} />
              </div>

              <div className="item__h4--1">
                <h4 className="item__h4">{producto.marca} - {producto.modelo}</h4>
              </div>

            </a>

            <div className="item__h4--1">
              <h5 className="item__h5">${producto.precio}</h5>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default item

