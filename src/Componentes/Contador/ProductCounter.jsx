import  { useState } from 'react';

function ProductCounter( {stock, modelo, precio, onAdd, initial} ) {

  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addProduct = () => {
    onAdd(count);
    setCount(initial)
  };
  //

  return (
    <div className='contador__grid'>

      <div className='contador__cant'>
        <button className='contador__cant--button' onClick={handleDecrement}>-</button>
        <span>{count}</span>
        <button className='contador__cant--button' onClick={handleIncrement}>+</button>
      </div>

      <div>
        <button className='contador__add--button' onClick={addProduct} >Agregar al carrito</button>
      </div>

      <p>Stock: {stock}</p>

    </div>
  );
}

export default ProductCounter;
