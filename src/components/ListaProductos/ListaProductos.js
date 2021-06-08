import React from 'react'
import './ListaProductos.css'
import Productos from '../Productos/Productos'

function ListaProductos() {
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

export default ListaProductos
