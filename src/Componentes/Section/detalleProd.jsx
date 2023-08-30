import { useState } from 'react';
import { NavLink, useParams, Link } from 'react-router-dom';
import Modal from 'react-modal';
import { productos } from "../../Productos/productos";
import ProductCounter from "../Contador/ProductCounter";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../reducers/Reducer';

const DetalleProd = ({ product }) => {

  const { id } = useParams(); // Obtener el ID del producto de la URL
  const producto = productos.find((p) => p.id === parseInt(id)); // Buscar el producto por ID
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [goToCart, setGoToCart] = useState(false);

  const dispatch = useDispatch();
  const miCarrito = useSelector((state) => state.array.value)

  useEffect(() => {
    console.log(miCarrito)
  }, [miCarrito])
  

  // const dispatch = useDispatch();

  // const agregarAlCarrito = () => {
  //   dispatch(addCart(product)); // Pasar el producto a la acción addCart
  // };

  const isInCart = (id) => cart.find(product => product.id === id)

  const handleAddToCart = () => {
    if (!isInCart(product.id)) {
      addProduct(product, 1);
    }
  };

  //
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const addProduct = (item, cantidad) => {
    if (isInCart(item.id)) {
      dispatch(addCart(cart.map((product) =>
      product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad } : product
    )))
    } else {
      dispatch(addCart([...cart, { ...item, cantidad }]))
    }
    addToCart(item); 
    setGoToCart(true);
  };
//  

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const totalPrecio = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  };

  const onAdd = (cantidad) => {
    addProduct(producto, cantidad);
  };

  const goToCartLink = `/cart?img=${producto.IMG}&modelo=${producto.modelo}&precio=${producto.precio}&cantidad=${cart.length}&total=${totalPrecio()}`;


  return (
    <div className="detalle">
      <div className="detalle__grid">
        <div className="detalle__img" style={{ position: 'relative', display: 'inline-block' }}>
          <div className="detalle__enlaces">
            <NavLink to="/">
              <h5 className="detalle__enlaces--a"> inicio /</h5>
            </NavLink>
            <NavLink to={`/${producto.marca}`}>
              <h5 className="detalle__enlaces--a"> {producto.marca} / </h5>
            </NavLink>
            <h5 className="detalle__enlaces--a" href=""> {producto.modelo}</h5>
          </div>
          <img src={producto.IMG} alt="Imagen" className='detalle__IMG'/>
          <button className='detalle__modal'
            onClick={openModal}
            >
            <i style={{ backgroundColor: 'white' }} className="ri-add-fill"></i>
          </button>

          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Imagen ampliada"
            className="detalle__imgModal"
          >
            <img src={producto.IMG} alt="Imagen ampliada" className='detalle__IMGModal' width="auto" height="505px" />
            <button onClick={closeModal} className="customButton">
              <i style={{ backgroundColor: 'white' }} className="ri-close-fill"></i>
            </button>
            <h6 className="detalle__h6">{producto.modelo}</h6>
          </Modal>
        </div>
        <div className="detalle__grid--info">
          <div>
            <h1 className="detalle__info--h1">{producto.modelo}</h1>
          </div>
          <div className="detalle__info--price">
            <p>${producto.precio}</p>
          </div>
          <hr className="separator" />
          <div className="detalle__descrip">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates iusto perspiciatis repellendus
              placeat atque? Minus quidem cumque accusamus nulla hic, ad dicta obcaecati doloribus ducimus omnis
              ullam vero aliquid tempore.
            </p>
          </div>
          <hr className="separator__ingredient" />
          <div>
            <p>
              <span style={{ fontWeight: 'bold', marginRight: '10px' }}>Ingredientes principales</span> Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Voluptates iusto perspiciatis repellendus placeat atque? Minus
              quidem cumque accusamus nulla hic, ad dicta obcaecati doloribus ducimus omnis ullam vero aliquid tempore.
            </p>
          </div>

          <div>

            {goToCart ? (
              <Link
                style={{ height: '100px' }}
                to={goToCartLink}
                className="contador__add--button"
              >
                Ir al carrito
              </Link>
            ) : (
              <ProductCounter stock={producto.stock} modelo={producto.modelo} precio={producto.precio} onAdd={onAdd} initial={1}/>
            )}
          </div>

          <div>
            <NavLink to={`/${producto.marca}`}>
              <h5 className="detalle__a">Categoria: {producto.marca} </h5>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProd;
