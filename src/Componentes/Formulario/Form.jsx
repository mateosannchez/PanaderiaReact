import { useState } from "react";
import "../../App.css"
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '../../reducers/Reducer'; 

const Form = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [pais, setPais] = useState('');
  const [direccion, setDireccion] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [postal, setPostal] = useState('');
  const [correo, setCorreo] = useState('');

  const cartItems = useSelector(state => state.array.value);
  const dispatch = useDispatch();


  //id aleatorio
  const generateRandomId = () => {
    const randomNumber = Math.random();
    const randomId = randomNumber.toString(36).substr(2, 9);
    return randomId;
  };

  const randomId = generateRandomId();
  console.log(randomId); 

  //

  //fecha de hoy
  const today = new Date();
  const year = today.getFullYear();
  const monthNames = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  const month = monthNames[today.getMonth()];
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${day} de ${month} de ${year}`;
  console.log(formattedDate); // Ejemplo de salida: "13 de junio de 2023"


  //
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
    validateForm();
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
    validateForm();
  };

  const handleChangePostal = (event) => {
    setPostal(event.target.value);
    validateForm();
  };

  const handleChangeCorreo = (event) => {
    setCorreo(event.target.value);
    validateForm();
  };

  const handleChangeCiudad = (event) => {
    setCiudad(event.target.value);
    validateForm();
  };

  const handleChangePais = (event) => {
    setPais(event.target.value);
    validateForm();
  };

  const handleChangeDireccion = (event) => {
    setDireccion(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    // Realiza la validación aquí, por ejemplo:
    const isValid = nombre.trim() !== '' && apellido.trim() !== '' && pais !== '' && correo !== '' && postal !== '' && ciudad !== '' && direccion !== '';
    setFormIsValid(isValid);
  };

  const totalCosto = cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

  const [opcionPago, setOpcionPago] = useState('');

  const [compraRealizada, setCompraRealizada] = useState(false);

  const [productosComprados, setProductosComprados] = useState([]);


  const handlePurchase = () => {
    
    const total = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    const cantidadTotal = cartItems.reduce((acc, item) => acc + item.cantidad, 0);

    const nombresProductos = cartItems.map(item => item.modelo);

    setProductosComprados({
      nombres: nombresProductos,
      total: total,
      cantidad: cantidadTotal,
    });

    // Marcar la compra como realizada
    setCompraRealizada(true);

    // Vaciar el carrito u otras acciones
    cartItems.forEach(item => {
      dispatch(removeProduct(item.id));
    });
  };


  return (
    <div className="form formulario-container">
      <h1 className="form__h1">Verificar</h1>
      <div className="form__grid">
        <div>
          <h3 className="form__h3">Detalles de facturación</h3>

          <div className="form__name">
            <div className="form__label">
              <h5 className="form__h5">nombre</h5>
              <input className='form-control'
                type="text"

                name="nombre"
                value={nombre}
                onChange={handleChangeNombre}
              />
            </div>


            <div className="form__label">
              <h5 className="form__h5">apellido</h5>
              <input className='form-control'
                type="text"

                name="apellido"
                value={apellido}
                onChange={handleChangeApellido}
              />
            </div>
          </div>

          <div className="form__label">
            <h5 className="form__h5">país</h5>
            <select className='form-control'>
              <option value="">Seleccione un país</option>
              <option value="ES" selected onChange={handleChangePais}>Argentina</option>
            </select>
          </div>

          <div className="form__label">
            <h5 className="form__h5">dirección de la calle</h5>
            <input className='form-control'
              type="text"

              name="direccion"
              value={direccion}
              onChange={handleChangeDireccion}
            />
          </div>

          <div className="form__label">
            <h5 className="form__h5">pueblo / ciudad / provincia</h5>
            <input className='form-control'
              type="text"

              name="ciudad"
              value={ciudad}
              onChange={handleChangeCiudad}
            />
          </div>

          <div className="form__label">
            <h5 className="form__h5">código postal</h5>
            <input className='form-control'
              type="text"

              name="postal"
              value={postal}
              onChange={handleChangePostal}
            />
          </div>

          <div className="form__label">
            <h5 className="form__h5">teléfono</h5>
            <input className='form-control'
              type="text"

              name="apellido"
              value={apellido}
            />
          </div>

          <div className="form__label">
            <h5 className="form__h5">dirección de correo electrónico</h5>
            <input className='form-control'
              type="text"

              name="correo"
              value={correo}
              onChange={handleChangeCorreo}
            />
          </div>

          <div className="form__label">
            <h5 className="form__h5">notas de pedido (opcional)</h5>
            <input className='form-control' type="text" name="nombre" />

          </div>

        </div>

        {/*  */}

        <div className="form" style={{ height: '75%' }}>

          <div className="form__flex">
            <h5 className="form__back--h5">producto</h5>
            <h5 className="form__back--h5">total parcial</h5>
          </div>
          <hr className="separator__ingredient"></hr>

          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="form__flex">

                <div className="cartItems__div">
                  <h5 className="form__back--h5">{item.modelo} <h3 className="form__back--h3">x {item.cantidad}</h3></h5>
                  <h5 className="form__back--h5">${item.precio * item.cantidad}</h5>
                </div>
              </li>
            ))}
          </ul>

          <div className="form__flex">
            <h5 className="form__back--h5">subtotal</h5>
            <h5 className="form__back--h5">${totalCosto}</h5>
          </div>

          <hr className="separator__ingredient"></hr>
          <div className="form__flex">
            <h5 className="form__back--h5">total</h5>
            <h5 className="form__back--h5">${totalCosto}</h5>
          </div>

          <div className="form__pago">
            <input type="radio"
              id="radio1"
              name="radio-group"
              value="transferencia"
              checked={opcionPago === 'transferencia'}
              onChange={() => setOpcionPago('transferencia')}
            />
            <label className="form__pago--label">transferencia bancaria</label>
          </div>

          <div className="form__pago">
            <input type="radio"
              id="radio2"
              name="radio-group"
              value="cheque"
              checked={opcionPago === 'cheque'}
              onChange={() => setOpcionPago('cheque')}
            />
            <label className="form__pago--label">cheque pagos</label>
          </div>

          <div className="form__pago">
            <input type="radio"
              id="radio2"
              name="radio-group"
              value="efectivo"
              checked={opcionPago === 'efectivo'}
              onChange={() => setOpcionPago('efectivo')}
            />
            <label className="form__pago--label">pago en efectivo</label>
          </div>

          <div>
            <p className="form__back--p1">Sus datos personales se utilizarán para procesar su pedido, respaldar su experiencia en este sitio web y para otros fines descritos en nuestra  política de privacidad .</p>
          </div>

          <form style={{ backgroundColor: 'transparent' }}>
            {/* Campos del formulario aquí */}

            <button type="button"
              onClick={handlePurchase}
              className='contador__add--button button__form'
            >
              Realizar pedido
            </button>
          </form>

          {compraRealizada &&
            <div className="mensaje-compra">
              <div className="form form__compra">

                <h2 className="form__p">Gracias. Tu orden ha sido recibida.</h2>

                <div className="form__grid1">

                  <div>
                    <h5 className="form__back--h5">número de orden:</h5>
                    <h3 className="form__h3">{randomId}</h3>
                  </div>

                  <div>
                    <h5 className="form__back--h5">fecha:</h5>
                    <h3 className="form__h3">{formattedDate}</h3>
                  </div>

                  <div>
                    <h5 className="form__back--h5">total:</h5>
                    <h3 className="form__h3">${productosComprados.total}</h3>
                  </div>

                  <div>
                    <h5 className="form__back--h5">método de pago:</h5>
                    {/* Mostrar información según la opción de pago */}
                    {opcionPago === 'transferencia' && (
                      <h5 className="form__back--h3">transferencia bancaria</h5>
                    )}
                    {opcionPago === 'cheque' && (
                      <h5 className="form__back--h3">pago con cheque</h5>
                    )}
                    {opcionPago === 'efectivo' && (
                      <h5 className="form__back--h3">pago en efectivo</h5>
                    )}
                  </div>
                </div>


                <div>
                  <h2>Detalles del pedido</h2>

                  <div className="form__back">

                    <div className="form__flex">
                      <h5 className="form__back--h5">productos</h5>
                      <h5 className="form__back--h3">total</h5>
                    </div>

                    <hr className="separator__ingredient"></hr>

                    {/* <ul>
                      {cartItems.map(item => (
                        <li key={item.id}> */}
                    <div className="form__flex">
                      <h5 className="form__back--h5">{productosComprados.nombres.join(', ')} <h3 className="form__back--h3">x{productosComprados.cantidad}</h3></h5>
                      <h5 className="form__back--h5">${productosComprados.total}</h5>
                    </div>

                    <hr className="separator__ingredient"></hr>

                    <div className="form__flex">
                      <h5 className="form__back--h5">envío:</h5>
                      <h5 className="form__back--h3">envío gratis </h5>
                    </div>

                    <hr className="separator__ingredient"></hr>

                    <div className="form__flex">
                      <h5 className="form__back--h5">método de pago:</h5>
                      {/* Mostrar información según la opción de pago */}
                      {opcionPago === 'transferencia' && (
                        <h5 className="form__back--h3">transferencia bancaria</h5>
                      )}
                      {opcionPago === 'cheque' && (
                        <h5 className="form__back--h3">pago con cheque</h5>
                      )}
                      {opcionPago === 'efectivo' && (
                        <h5 className="form__back--h3">pago en efectivo</h5>
                      )}
                    </div>

                    <hr className="separator__ingredient"></hr>

                    <div className="form__flex">
                      <h5 className="form__back--h5">total</h5>
                      <h5 className="form__back--h3">${productosComprados.total}</h5>
                    </div>

                    {/* </li>
                      ))}
                    </ul> */}


                  </div>
                </div>
              </div>
            </div>}

        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default Form