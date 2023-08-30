import { NavLink } from "react-router-dom"
import "../../App.css"
import Carrito from "../Carrito/carrito"
import { useState, useRef, useEffect } from "react"


const nav = () => {

    const [showLinks, setShowLinks] = useState(false);
    const containerRef = useRef(null);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const closeMenu = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setShowLinks(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeMenu);
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);

    return (

        <header className="header">

            <div className="header__logo">
                <NavLink to="/" className="header__a">
                    <h1 className="header__h1">nokul</h1>
                </NavLink>

            </div>

            <div className="header__flex">

                <div className="header__navflex">
                    <nav className="header__none">
                        <ul>
                            <li><a href="#">Comercio <i className="ri-arrow-down-s-line"></i></a>

                                <ul>
                                    <li className="header__li">
                                        <NavLink to="/Pan" >Panes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/Torta" >Tortas</NavLink>
                                    </li>
                                </ul>

                            </li>


                            <li>
                                <NavLink to="/" >Acerca de</NavLink>
                            </li>

                            <li>
                                <NavLink to="/" >Blog</NavLink>
                            </li>

                            <li>
                                <NavLink to="/" >Contacto</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="button-container">
                        <button onClick={toggleLinks} id="toggleButton">
                            <i style={{ fontSize: '22px' }} className="ri-menu-line"></i>
                        </button>
                        <div ref={containerRef} className={`items-container ${showLinks ? 'show' : ''}`} id="itemsContainer">
                            <div style={{ color: 'black' }} className="item">Menú</div>
                            <NavLink to="/Pan" className="nav__responsive" >Panes</NavLink>
                            <NavLink to="/Torta" className="nav__responsive" >Tortas</NavLink>
                            <NavLink to="/" style={{ lineHeight: '16px' }} className="nav__responsive" >Acerca de</NavLink>
                            <NavLink to="/" className="nav__responsive" >Blog</NavLink>
                            <NavLink to="/" className="nav__responsive" >Contacto</NavLink>

                            <button style={{background:'transparent'}}>
                            <i className="ri-shopping-cart-line"></i>
                                <div className="header__button--menu">
                                    <Carrito />
                                </div>
                            </button>
                        </div>

                    </div>

                </div>

                <div className="header__navflex">
                    <Carrito />
                </div>



            </div>


        </header>

    )
}

export default nav


