import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

function ItemDetailContainer( { match }) {
    let itemID = match.params.id;
    const [items, setItems] = useState([]);

    useEffect(() => {
            axios('../json/Detail.json')
           .then(respuesta => setItems(respuesta.data));    
    }, []);

    let itemDetallado = items.filter(item => item.id === itemID);
    console.log("detallado" , itemDetallado);
    return (
        <div>
            <h1>detalle de item</h1>
            {itemDetallado.map((item) => {
                return (<div key={item.id}>
                        
                            <ItemDetail item={item}/>
                        
                        </div>)
            })}
            
        </div>
    )
}

export default ItemDetailContainer

