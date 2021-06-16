import React from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';

function ItemListContainer(prop) {
    return (
        <div>
            <h1>{prop.greeting}</h1>

            <ItemList />
            
        </div>
    )
}

export default ItemListContainer
