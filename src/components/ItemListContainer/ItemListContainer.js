import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';

function ItemListContainer(prop) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            axios('json/Detail.json')
           .then(respuesta => setProductos(respuesta.data));    
        }, 2000);     
    }, []);
    return (
        <div>
            <h1>{prop.greeting}</h1>

            <ItemList productos={productos}/>
            
        </div>
    )
}

export default ItemListContainer
