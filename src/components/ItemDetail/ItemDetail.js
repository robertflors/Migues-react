import React, {useState} from 'react'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import '../Item/Item.css';




function ItemDetail( {item, id} ) {

        const [cant, setCant] = useState(0);

    const onAdd = (e) => {
        setCant(e);       
    }
       
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title> 
            <p>precio: {item.price}</p> 
            <p className="itemCard__stock">stock: {item.stock}</p>          
            
        </Card.Body>      
       
    </Card>

    <div className="container">
        {item.detail}
        <div className="container mt-5">
        {cant === 0 ? 
            <ItemCount stock={item.stock} item={item} onAdd={onAdd} id={id}/>
        :   <>
            <ItemCount stock={item.stock} item={item} onAdd={onAdd} id={id}/>
            <Link to={'/cart'}>
                <button className="btn botonInfo">finalizar compra ({cant} {item.title})</button>         
            </Link> 
            </>} 
        </div>
       
         <Link to={`/`} style={{textDecoration : 'none'}}>
           <p className="mt-5">volver</p> 
         </Link>    
    </div>

   
            
        </div>
    )
}

export default ItemDetail

