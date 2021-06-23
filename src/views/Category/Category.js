import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../../components/Item/Item';

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
            {categoriaSeleccionada.map((item) => {
                return (<div key={item.id} className="container d-flex justify-content-center">
                        
                            <Item item={item}/>
                        
                        </div>)
            })}

        </div>
    )
}

export default Category
