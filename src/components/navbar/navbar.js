import React from 'react';
import './Navbar.css';
import Cart from '../Cart/Cart';

function Navbar (){
return(
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="img/logoNegro.PNG" className="d-inline-block align-text-top" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav d-flex flex-row-reverse bd-highlight">
                    <a className="nav-link" href="#"><img src="img/instagram.png" alt="" id="logoInstagram" /></a>
                    {/* AQUI SE IMPORTA EL COMPONENTE CART */}
                    <Cart />
                </div>
            </div>
        </div>
    </nav>
);
}

export default Navbar;