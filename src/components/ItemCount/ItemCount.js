
import React, { useState } from 'react';
import './ItemCount.css'

function ItemCount({name, stock}) {
    const [cant, setCant] = useState(1);

    const sumarProducto = () => {
        setCant(cant + 1);
    }

    const restarProducto = () => {
        setCant(cant - 1);
    }

    const onAdd = () => {
        alert(`agregaste ${cant} ${name}`);
    }

    return (
        <div>
            <p>{cant}</p>
            <div className="agrupacionBotonesCompras">
                {/* botón de menos */}
            {cant < 1 ? 
                <button className="minimo btn"><img src="img/menos.png" alt="menor que" class="menorQue"/></button>
            :   <button onClick={restarProducto} className="btn botonCantidad"><img src="img/menos.png" alt="menor que" class="menorQue"/></button>     
            }
                {/* botón para agregar al carrito */}
            {cant < 1 ?
                 <button className="minimo btn"><img src="img/carrito.png" alt="carrito de compras" className="agregarAlCarrito" /></button> 
            :     <button onClick={onAdd} className="botonAgregarAlCarrito btn"><img src="img/carrito.png" alt="carrito de compras" className="agregarAlCarrito"/></button>
            
            }
                {/* botón de más */}
            {cant >= stock ?                                                
                 <button className="maximo btn"><img src="img/mas.png" alt="mayor que" class="mayorQue"/></button>
            :    <button onClick={sumarProducto} className="btn botonCantidad"><img src="img/mas.png" alt="mayor que" class="mayorQue"/></button>          
            }
            </div>    
                 
        </div>
    )
}

export default ItemCount;
