import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './ItemList.css'
import axios from 'axios';


function ItemList() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setTimeout(()=>{
            axios('json/Detail.json')
           .then(respuesta => setProductos(respuesta.data));    
        }, 2000);     
    }, []);
    console.log("detalles" , productos);
    return (
        <div className="itemList">
            {productos.map((item) => {
                return (<div key={item.id}>
                        
                            <Item item={item}/>
                        
                        </div>)
            })}
        </div>
    );
}

export default ItemList
