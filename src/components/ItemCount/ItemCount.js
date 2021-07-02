
import React, { useState, useContext } from 'react';
import './ItemCount.css'
import menos from './img/menos.png';
import mas from './img/mas.png';
import carrito from './img/carrito.png';

import { CartContext } from '../../context/CartContext';


function ItemCount({stock, onAdd, item}) {
    const [cant, setCant] = useState(1);
    const contexto = useContext(CartContext);

    const sumarProducto = () => {
        setCant(cant + 1);
    }

    const restarProducto = () => {
        setCant(cant - 1);
    }

    const agregarAlCarrito = (cant) => {
        contexto.addItem({item} , cant);
    }


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
            :    <button onClick={()=> {onAdd(cant); agregarAlCarrito(cant)}} className="botonAgregarAlCarrito btn"><img src={carrito} alt="carrito de compras" className="agregarAlCarrito"/></button>
            
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
