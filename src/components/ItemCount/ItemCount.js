
import React, { useState } from 'react';
import './ItemCount.css'
import menos from './img/menos.png';
import mas from './img/mas.png';
import carrito from './img/carrito.png';

function ItemCount({stock, onAdd}) {
    const [cant, setCant] = useState(1);

    const sumarProducto = () => {
        setCant(cant + 1);
    }

    const restarProducto = () => {
        setCant(cant - 1);
    }

    // const onAdd = () => {
    //     ;
    // }

    return (
        <div>
            <p>{cant}</p>
            <div className="agrupacionBotonesCompras">
                {/* botón de menos */}
            {cant < 1 ? 
                <button className="minimo btn"><img src={menos} alt="menor que" class="menorQue"/></button>
            :   <button onClick={restarProducto} className="btn botonCantidad"><img src={menos} alt="menor que" class="menorQue"/></button>     
            }
                {/* botón para agregar al carrito */}
            {cant < 1 ?
                 <button className="minimo btn"><img src={carrito} alt="carrito de compras" className="agregarAlCarrito" /></button> 
            :     <button onClick={()=>onAdd(cant)} className="botonAgregarAlCarrito btn"><img src={carrito} alt="carrito de compras" className="agregarAlCarrito"/></button>
            
            }
                {/* botón de más */}
            {cant >= stock ?                                                
                 <button className="maximo btn"><img src={mas} alt="mayor que" class="mayorQue"/></button>
            :    <button onClick={sumarProducto} className="btn botonCantidad"><img src={mas} alt="mayor que" class="mayorQue"/></button>          
            }
            </div>    
                 
        </div>
    )
}

export default ItemCount;
