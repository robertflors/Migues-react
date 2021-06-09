import React from 'react'
import './ItemListContainer.css'
import Productos from '../Productos/Productos'

function ItemListContainer() {
    return (
        <div>
            <ul>
                <Productos name="Remeras"/>
                <Productos name="Stickers"/>
                <Productos name="Tote Bags"/>
            </ul>
            
        </div>
    )
}

export default ItemListContainer
