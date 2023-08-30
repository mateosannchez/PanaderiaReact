import SectionBody from "./sectionBody"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Tortas from './tortas'
import Panes from './panes'
import TodosLosProductos from './todosLosProductos';
import DetalleProd from "./detalleProd";
import Cart from "../Carrito/cart";
import Form from "../Formulario/Form";



const section = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SectionBody />} />
        <Route path="/Torta" element={<Tortas />} />
        <Route path="/Pan" element={<Panes />} />
        <Route path="/todos-los-productos" element={<TodosLosProductos/>} />
        <Route path="/productos/:id" element={<DetalleProd />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default section