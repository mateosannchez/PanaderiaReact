import "../../App.css"
import Nav from "./nav"
import { BrowserRouter as Router } from 'react-router-dom';

const Header = () => {

    return (
        <Router>

        <header >
            <Nav />

            <div className="header__span">
                <span className="header__span--1">Por amor al pan</span>
            </div>

            <div >
                <div >
                    <img className="header__img" src="../../../public/Img/1.jpg" alt=""/>
                
                    <div className="header__img--button">
                        <a className="header__img--button2" href=""><button className="header__img--button1">Descubrir más <i className="ri-arrow-down-line header__img--i"></i></button></a>
                    </div>
                </div>

            </div>

        </header>

        </Router>
    )
}

export default Header;

