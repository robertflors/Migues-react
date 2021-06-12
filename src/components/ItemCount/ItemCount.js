
import React, { useState } from 'react';

function ItemCount({id , nombre , stock , precio}) {
    const [cant, setCant] = useState(1);

    const sumarProducto = () => {
        setCant(cant + 1);
    }

    const restarProducto = () => {
        setCant(cant - 1);
    }

    return (
        <div>
            <p>{cant}</p>
            <button onClick={restarProducto}>-</button>
            <button onClick={sumarProducto}>+</button>          
        </div>
    )
}

export default ItemCount;
