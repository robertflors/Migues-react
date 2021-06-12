import React from 'react'
import './ItemListContainer.css'
import Productos from '../Productos/Productos'

function ItemListContainer(prop) {
    return (
        <div>
            <h1>{prop.greeting}</h1>
            <ul>
                <Productos name="Remeras" stock="3"/>
                <Productos name="Stickers" stock="10"/>
                <Productos name="Tote Bags" stock="2"/>
            </ul>
            
        </div>
    )
}

export default ItemListContainer
