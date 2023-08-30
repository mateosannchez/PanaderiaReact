import "../../App.css"

const footer = () => {
    return (
        <div className="footer">
            <div className="footer__grid1">
                <h3 className="footer__h3">AV. Chacabuco, Córdoba,
                    ARGENTINA <br /> +54 351 888415
                    LUNES - SABADO
                    8:00 am. - 17:00 pm.
                </h3>

                <div className="footer__grid--flex">

                    <nav className="footer__nav">
                        <ul className="footer__nav--ul">
                            <li><a href="">Inicio</a> </li>
                            <li><a href="">Comercio</a> </li>
                            <li><a href="">Contacto</a> </li>
                            <li ><a href="">Acerca de</a> </li>
                        </ul>
                    </nav>

                    <nav className="footer__nav">
                        <ul className="footer__nav--ul">
                            <li><a href="">Instagram</a> </li>
                            <li><a href="">Pinterest</a> </li>
                            <li><a href="">Facebook</a> </li>
                        </ul>
                    </nav>

                    <nav className="footer__nav">
                        <ul className="footer__nav--ul">
                            <li><a href="">Compras</a> </li>
                            <li><a href="">Privacidad</a> </li>
                            <li><a href="">Imprimir</a> </li>
                        </ul>
                    </nav>
                </div>


            </div>

            <div className="footer__grid2">
                <div className="footer__email">

                    <h3 className="footer__email--h3">Aqui envie un email:</h3>
                    <p ><a href="" className="footer__email--p">nokul@panaderia.com</a></p>

                </div>

                <div>
                    <p className="footer__email__p2">Si tiene alguna pregunta sobre nuestros productos o negocios, no dude en <a className="footer__email--p" href="">contactarnos</a>.</p>
                </div>

                <div>
                    <p className="footer__email__p3">
                    &copy; 2023 Nokul, Todos los derechos reservados.
                    <a className="footer__email--p" href="/terminos-y-condiciones.html">Términos y Condiciones</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default footer