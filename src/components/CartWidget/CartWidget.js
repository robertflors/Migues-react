import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import carrito from '../../img/carrito.png';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';


function CartWidget() {
const {cart} = useContext(CartContext)

let acum = 0;

for (let item of cart) {
    acum += item.quantity;
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