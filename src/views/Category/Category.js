import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from '../../components/ItemList/ItemList';

function Category( {match} ) {
    let categoryId = match.params.categoryId;
    const [category, setCategory] = useState([]);

    useEffect(() => {
            axios('../json/Detail.json')
           .then(respuesta => setCategory(respuesta.data));    
    }, []);

    let categoriaSeleccionada = category.filter(item => item.category === categoryId);
    console.log("detallado" , categoriaSeleccionada);
    
    return (
        <div>
            <h3>Categoría:</h3>
            <ItemList productos={categoriaSeleccionada}/>
        </div>
    )
}

export default Category
