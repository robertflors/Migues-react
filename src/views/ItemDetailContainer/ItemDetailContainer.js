import React, { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { db } from '../../Firebase/Firebase';

function ItemDetailContainer( { match }) {
    let itemID = match.params.id;
    const [items, setItems] = useState([]);

    const obtenerProductos = () => {
        db.collection('productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            });
        setItems(docs);
        });
    }

    useEffect(() => {
        obtenerProductos();            
    }, []);

    let itemDetallado = items.filter(item => item.id === itemID);

    return (
        <div>
            <h3>detalle de item</h3>
            {itemDetallado.map((item) => {
                return (<div key={item.id}>
                        
                            <ItemDetail item={item}/>
                        
                        </div>)
            })}
            
        </div>
    )
}

export default ItemDetailContainer

