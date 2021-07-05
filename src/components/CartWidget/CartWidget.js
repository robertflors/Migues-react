import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import carrito from '../../img/carrito.png';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';


function CartWidget() {
const contexto = useContext(CartContext);

let acum = 0;

if (contexto.cart.length > 0 && contexto.cart.length < 2){  
    acum = contexto.cart[0].quantity;

} else if (contexto.cart.length > 0){    
    acum = contexto.cart.reduce((a,b)=> a.quantity + b.quantity);
}

return (
<div>
    <Link to='/Cart' style={{ textDecoration: 'none' }}>
    <div id="cartWidgetContainer">
    <img src={carrito} alt="carrito de compras" id="cartWidget" />
    {acum > 0 ?
      <p className="cartWidget__acum">{acum}</p>
    : <p className="cartWidget__acum">0</p>
    }
    </div>
    </Link>    
</div>







)
}

export default CartWidget