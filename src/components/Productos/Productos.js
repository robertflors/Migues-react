import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function Productos(props) {
return (

<li className="listaProductos">
    <button class="btn" type="button">
        <h3>{props.name}</h3>
        <ItemCount />
    </button>
</li>

)
}

export default Productos