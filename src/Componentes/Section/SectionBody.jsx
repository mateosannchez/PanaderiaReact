import "../../App.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OpcionesFiltro from "./opcionesFiltro";

const sectionBody = () => {

    const navigate = useNavigate();

    const verTodosLosProductos = () => {
    navigate('/todos-los-productos');
    };


    const [tipoProducto, setTipoProducto] = useState('todos');

    const filtrarProductos = (tipo) => {
        setTipoProducto(tipo);
    };

    return (
        <div>

            <div className="sectioBody__grid">
                <div className="sectionBody__h2-1">
                    <h1 className="sectionBody__h2">
                        TUS FAVORITOS DE NOKUL, A SOLO UN CLIC DE DISTANCIA.
                    </h1>
                </div>

                <div className="sectionBody__flex">
                    <h5 className="sectionBody__h5">
                        Pastelería a tu alcance
                    </h5>
                    <p className="sectionBody__p">
                        Entregando deliciosos panes y pasteles para chuparse los dedos directamente a su puerta. Desde 2005, Nokul se ha dedicado a crear recetas saludables.
                    </p>
                </div>

                <div className="sectionBody__flex">
                   
                    <button onClick={verTodosLosProductos} className="sectionBody__button">
                        Ver todos los productos
                    </button>

                </div>
            </div>

            <div>
                <OpcionesFiltro filtrarProductos={filtrarProductos} /> 
            </div>

            <div className="sectionNos__grid">
                <div className="sectionNos__1">
                    <img className="sectionNos__img" src="../../../public/Img/panfinpag.jpg" alt="" width="500px" height="800px" />
                </div>

                <div className="sectionNos__2">
                    <h1 className="sectionNos__h1">HACEMOS UN PAN SABROSO QUE ENRIQUECE TUS COMIDAS.</h1>


                    <p className="sectionNos__p">
                        <h5 className="sectionBody__h5">Nuestro proceso</h5>

                        Al centrarnos en crear panes, bollos, baguettes y pasteles ricos en nutrientes, hemos desarrollado recetas saludables que cualquiera puede probar. Creemos que el tiempo y los ingredientes que usamos al hacer los productos son elementos cruciales de productos ricos y nutritivos.
                        <br />
                        <br />
                        Nuestros productos no contienen conservantes, ya que se conservan solos gracias a la fermentación. Nuestros panes integrales contienen más agua, lo que significa que tardan más en secarse. El ácido producido por la bacteria Lactobacillus durante la fermentación de la masa madre ayuda a que las hogazas se mantengan frescas por más tiempo y repele cualquier moho que aparezca en las hogazas y panes de harina blanca.
                    </p>

                </div>
            </div>
        </div>
    )
}

export default sectionBody