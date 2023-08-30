import { Link, NavLink } from 'react-router-dom';
import { productos } from '../../Productos/productos';

const Tortas = () => {
  const productosTortas = productos.filter((producto) => producto.marca === 'Torta');

  return (
      <div className="item__display">
        <NavLink to="/" className="navlink__item">

          <h2 className="form__p navlink__h2">Tortas <i className="ri-arrow-left-line"></i></h2>
        </NavLink>

          {productosTortas.map((producto) => (

              <div className='item__width' key={producto.id}>

                <Link to={`/productos/${producto.id}`}>

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
                </Link>


              </div>
          ))}
      </div>
  );
};

export default Tortas;
