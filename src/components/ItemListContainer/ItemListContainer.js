import React from 'react'
import './ItemListContainer.css'
import Productos from '../Productos/Productos'

function ItemListContainer(prop) {
    return (
        <div>
            <h1>{prop.greeting}</h1>
            <ul>
                <Productos name="Remeras"/>
                <Productos name="Stickers"/>
                <Productos name="Tote Bags"/>
            </ul>
            
        </div>
    )
}

export default ItemListContainer
