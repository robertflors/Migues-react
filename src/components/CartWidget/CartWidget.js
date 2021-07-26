import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import carrito from '../../img/carrito.png';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';


function CartWidget() {
const {acum} = useContext(CartContext)

return (
<div>
    <Link to='/Cart' style={{ textDecoration: 'none' }}>
    <div id="cartWidgetContainer">
    <img src={carrito} alt="carrito de compras" id="cartWidget" />
    
      <p className="cartWidget__acum">{acum}</p>
    
    </div>
    </Link>    
</div>







)
}

export default CartWidget