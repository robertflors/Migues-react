import React, { useEffect, useState } from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { db } from '../../Firebase/Firebase';

function ItemDetailContainer( { match }) {
    let itemID = match.params.id;
    const [items, setItems] = useState({});

    useEffect(() => {
        db.collection('productos').doc(itemID).get().then((r)=>setItems(r.data()));              
    }, [itemID]);

    return (
        <div>
            <h3>detalle de item</h3>        
            <ItemDetail item={items} id={itemID}/>
        </div>
    )
}

export default ItemDetailContainer

