import { Link, NavLink } from 'react-router-dom';
import { productos } from '../../Productos/productos';

const Panes = () => {
  const productosPanes = productos.filter((producto) => producto.marca === 'Pan');

  return (
    <div className="item__display">

      <NavLink to="/">
            <h2 className="form__p navlink__h2">Panes <i className="ri-arrow-left-line"></i></h2>
      </NavLink>
      
      {productosPanes.map((producto) => (

        <div key={producto.id}>

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

export default Panes;
