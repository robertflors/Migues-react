import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ItemDetailContainer( { match }) {
    let itemID = match.params.id;
    const [items, setItems] = useState([]);

    useEffect(() => {
            axios('json/Detail.json')
           .then(respuesta => setItems(respuesta.data));    
    }, []);

    let itemDetallado = items.filter(item => item.id === itemID);
    console.log("detallado" , );
    return (
        <div>
            detalle de item
            <p>{itemDetallado.title} a</p>
            
        </div>
    )
}

export default ItemDetailContainer

