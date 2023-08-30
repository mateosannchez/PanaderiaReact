import { useState } from 'react';
import "../../App.css"
import {  Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeProduct } from '../../reducers/Reducer';


export const Carrito = () => {

  const infoCarrito = useSelector((state) => state.array.value);
  const dispatch = useDispatch();


  //abrir carrito vacio
  const [showSidebar, setShowSidebar] = useState(false);
  
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  //
  const handleIncrement = (productId) => {
    dispatch(increment(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrement(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };


  return (

    <div>
      
      {infoCarrito.map((producto) => (
        <div key={producto.id}>

          <div className="header__navflex">

            <Link to={'/cart'}>
            
            <button className="header__button " onClick={toggleSidebar}>
              {infoCarrito.length === 0 ? (
                <span className="header__button--span">0</span>
              ) : (
                <div>
                  <span className="header__button--span">{infoCarrito.length}</span>
                  <div className="header__button--i">
                    <i className="ri-shopping-cart-2-line"></i>

                    <div className="header__button--total">${producto.precio * producto.cantidad}</div>
                  </div>
                </div>
              )}
            </button>

            </Link>
            {/* Lógica para mostrar el sidebar */}
            {showSidebar && (
              <>
                <div className="sidebar">
                  {/* Contenido del sidebar */}
                  <button className="sidebar__close-button" onClick={closeSidebar}>
                    <i style={{ fontSize: '30px' }} className="ri-close-line"></i>
                  </button>



                  {/* conproductos */}

                  <div className='carrito1'>
                    <h2 className='carrito1__h2'>tu carrito</h2>

                    <div className='carrito1__grid1'>

                      <div className='carrito1__img'>
                        <Link to={`/productos/${producto.id}`}>
                          <img src={producto.IMG} alt="" width='120px' height='110px' style={{ objectFit: "cover" }} />
                        </Link>
                      </div>

                      <div>

                        <Link to={`/productos/${producto.id}`}>
                          <p style={{ fontSize: '19px', fontWeight: '200' }}>{producto.modelo}</p>
                        </Link>

                        <h5 style={{ fontWeight: '500', fontSize: '16px' }}>${producto.precio}</h5>


                        <div className='contador__grid'>
                          <div className='contador__cart'>
                            <button className='contador__cant--button' onClick={() => handleDecrement(producto.id)}>-</button>
                            <span>{producto.cantidad}</span>
                            <button className='contador__cant--button' onClick={() => handleIncrement(producto.id)}>+</button>
                          </div>
                        </div>

                        <p onClick={() => handleRemove(producto.id)} style={{ fontSize: '12px', textDecoration: 'underline', cursor: 'pointer' }}>eliminar item</p>
                      </div>

                      <div>
                        <h5 style={{ fontWeight: '500', fontSize: '16px' }}>${producto.precio * producto.cantidad}</h5>
                      </div>

                    </div>

                    <div className='carrito1__fixed'>

                      <hr className="separator__ingredient" />

                      <div className='carrito1__total'>
                        <span className='carrito1__span'>total parcial</span>
                        <span className=''>${producto.precio * producto.cantidad}</span>
                      </div>

                      <p className='carrito1__p'>Envío, impuestos y descuentos calculados al finalizar la compra.</p>
                      <div className='carrito1__grid'>

                        <div>
                          <Link to={`/cart`}>
                            <button className="carrito1__add--button ">ver mi carrito</button>
                          </Link>
                        </div>
                        <div>
                          <Link to={`/form`}>
                            <button style={{ marginTop: '10px', textTransform: 'uppercase', fontWeight: '500' }} className="contador__add--button">ir a caja</button>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/* conproductos */}

                </div>
                <div className="sidebar-overlay" onClick={closeSidebar}></div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrito;
