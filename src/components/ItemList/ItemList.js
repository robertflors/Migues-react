import React from 'react';
import Item from '../Item/Item';
import './ItemList.css'



function ItemList( {productos} ) {
    
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
