import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { db } from '../../Firebase/Firebase';

function Category( {match} ) {
    let categoryId = match.params.categoryId;
    const [category, setCategory] = useState([]);

    const obtenerProductos = () => {
        db.collection('productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id })
            });
        setCategory(docs);
        });
    }
    useEffect(() => {
        obtenerProductos();            
    }, []);

    let categoriaSeleccionada = category.filter(item => item.category === categoryId);
   
    return (
        <div>
            <h3>Categoría:</h3>
            <ItemList productos={categoriaSeleccionada}/>
        </div>
    )
}

export default Category
