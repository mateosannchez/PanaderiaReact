import "../../App.css"
import { Link } from 'react-router-dom';

const OpcionesFiltro = () => {
    return (
        <div className="section__grid--opciones">
            <div className="section__opc--img">
                <Link to="/Torta" className="contenedor">
                    <img className="section__opcIMg" src="../../../public/Img/cookie.jpg" alt="" />
                    <div className="texto">Tortas</div>
                </Link>
            </div>

            <div className="section__opc--img">
                <Link to="/Pan" className="contenedor">
                    <img className="section__opcIMg" src="../../../public/Img/bread.jpg" alt="" />
                    <div className="texto">Panes</div>
                </Link>
            </div>
        </div>
    );
};

export default OpcionesFiltro;
