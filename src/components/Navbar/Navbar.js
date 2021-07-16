import React from 'react';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'

function Navbar (){
return(
<nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
        <Link className="navbar-brand" to={`/`}>
            <img src="img/logoNegro.PNG" className="d-inline-block align-text-top" alt="logotipo del gato miau"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex flex-row-reverse bd-highlight">
                
                <a className="nav-link" href="https://www.instagram.com/migueily/"><img src="img/instagram.png" alt="instagram" id="logoInstagram" /></a>

                {/* AQUI SE IMPORTA EL COMPONENTE CART WIDGET */}
                <CartWidget />

                <div className="dropdown">
                    <Link className="btn dropdown-toggle" to="/" role="button" id="dropdownMenuLink"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </Link>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><Link className="dropdown-item navbar__botonCategorias" to={'/category/remeras'}>Remeras</Link></li>
                        <li><Link className="dropdown-item navbar__botonCategorias" to={'/category/stickers'}>Stickers</Link></li>
                        <li><Link className="dropdown-item navbar__botonCategorias" to={'/category/totebags'}>Tote Bags</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>
);
}

export default Navbar;