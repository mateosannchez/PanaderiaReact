import { useState } from "react";
import "../../App.css"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeProduct } from '../../reducers/Reducer';

const Cart = () => {

    const dispatch = useDispatch();

    const cartItems = useSelector(state => state.array.value);

    const handleIncrement = (productId) => {
        dispatch(increment(productId));
    };

    const handleDecrement = (productId) => {
        dispatch(decrement(productId));
    };

    const handleRemove = (productId) => {
        dispatch(removeProduct(productId));
    };

    const [cartEmpty, setCartEmpty] = useState(cartItems.length === 0);

    const agregarAlCarrito = () => {
        // Lógica para agregar un producto al carrito
        setCartEmpty(false); // Cambiar el estado a false cuando se agrega un producto
    };

    const totalCosto = cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

    //

    return (
        <div className="cart">

            <div>
                <h1 className="form__h1">Carrito</h1>
                {cartEmpty ? (
                    <div className="noCart">
                        <div className="noCart__1">
                            <p className="noCart__p">Su carrito está vacío.</p>
                        </div>

                        <div className="carrito__flex" style={{ padding: '2rem' }}>
                            <a className href="/todos-los-productos">
                                <button className="carrito__button">volver a la tienda</button>
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="cart__grid">

                        <div className="cart__width">
                            <ul>
                                <thead className="cartThread__none">
                                    <tr>
                                        <th><span className="cart__vacio"></span></th>
                                        <th><span className="cart__vacio"></span></th>
                                        <th>producto</th>
                                        <th className="cart__title">precio</th>
                                        <th style={{ paddingLeft: '4rem' }} className="cart__title">cantidad</th>
                                        <th style={{ paddingLeft: '8rem' }} className="cart__title">subtotal</th>
                                    </tr>
                                </thead>
                                {cartItems.map(item => (
                                    <li className="cartItem__li" key={item.id}>

                                        <div>
                                            <button className="cartRemove__cart" onClick={() => handleRemove(item.id)}>
                                                <i className="ri-close-line"></i>
                                            </button>
                                        </div>

                                        <Link to={`/productos/${item.id}`}>
                                            <img src={item.IMG} alt="" width='120px' height='110px' style={{ objectFit: "cover" }} />
                                        </Link>

                                        <div className="cart__name" style={{ margin: '10px', padding: '1rem' }}>
                                            {item.modelo}
                                        </div>

                                        <div className="cart__name" style={{ margin: '10px', padding: '1rem' }}>
                                            ${item.precio}
                                        </div>



                                        <div className='contador__grid'>
                                            <div className='contador__cart'>
                                                <button className='contador__cant--button' onClick={() => handleDecrement(item.id)}>-</button>
                                                <span>{item.cantidad}</span>
                                                <button className='contador__cant--button' onClick={() => handleIncrement(item.id)}>+</button>
                                            </div>
                                        </div>

                                        <div className="cart__name">
                                            ${item.precio * item.cantidad}
                                        </div>

                                    </li>
                                ))}
                            </ul>

                        </div>

                        <div className="cart__total">
                            <h3 className="form__h3">total del carro</h3>
                            <tbody>
                                <tr className="form__flex form__width">
                                    <th className="form__back--h5">total parcial</th>
                                    <td>${totalCosto}</td>
                                </tr>
                                <hr className="separator__ingredient" />
                                <tr className="form__flex">
                                    <th className="form__back--h5">envío</th>
                                    <td >

                                        <div className="form__pago" style={{ backgroundColor: 'transparent' }}>
                                            <input type="radio" id="radio1" name="radio-group"></input>
                                            <label className="form__pago--label" style={{ backgroundColor: 'transparent' }}>retiro por local</label>
                                        </div>
                                        <div className="form__pago" style={{ backgroundColor: 'transparent' }}>
                                            <input type="radio" id="radio1" name="radio-group"></input>
                                            <label className="form__pago--label" style={{ backgroundColor: 'transparent' }}>envio a domicilio</label>
                                        </div>

                                    </td>
                                </tr>
                                <hr className="separator__ingredient" />
                                <tr className="form__flex form__width">
                                    <th className="form__back--h5">total </th>
                                    <td>${totalCosto}</td>
                                </tr>
                            </tbody>

                            <div style={{ paddingTop: '2rem' }}>
                                <Link to={`/form`}>
                                    <button className="contador__add--button button__form" style={{ textTransform: 'uppercase' }}>pasar por la caja</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </div>

    )

}

export default Cart;
