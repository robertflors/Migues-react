import React, {useEffect, useState} from 'react';
import Item from '../Item/Item';
import './ItemList.css'

function ItemList() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve([
                    {id: 1 , title: "remera", stock: 5, description: "remera de algodón, con diseño", price: 500, pictureUrl: "https://saborstore.com/wp-content/uploads/2019/10/Remera-SkateCho-Rosa-Negro-Frente.jpg"},
                    {id: 2 , title: "sticker", stock: 10, description: "lote de stickers pequeños", price: 100, pictureUrl: "https://holdit.com/en/wp-content/uploads/sites/2/2020/10/14842_1.jpg"},
                    {id: 3 , title: "tote bag", stock: 4, description: "tote bag con diseño", price: 600, pictureUrl: "https://cdn.shopify.com/s/files/1/1722/0531/products/modern-love-tote-bicycle_1024x1024.jpg?v=1571439091"}
                ]);
            }, 2000)
        });
        promesa.then((resultado)=>{
            setProductos(resultado);
        });       
      
    }, []);
    console.log(productos);
    return (
        <div className="itemList">
            {productos.map(item => <Item key={item.id} item={item}/>)}
        </div>
    );
}

export default ItemList
