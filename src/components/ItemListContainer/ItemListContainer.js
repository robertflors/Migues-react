import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { db } from '../../Firebase/Firebase';

function ItemListContainer(prop) {
    const [productos, setProductos] = useState([]);

    const obtenerProductos = () => {
        db.collection('productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            });
        setProductos(docs);
        console.log(productos); 
        });
    }

    useEffect(() => {
        obtenerProductos();            
    }, []);

    return (
        <div>
            <h1>{prop.greeting}</h1>

            <ItemList productos={productos}/>
            
        </div>
    )
}

export default ItemListContainer
