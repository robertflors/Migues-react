import React from 'react'
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ItemDetail( {item}) {
    return (
        <div className="container d-flex justify-content-center mt-5">
            <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.description}                             
            </Card.Text>   
            <p>{item.price}</p>

            
        </Card.Body>
    </Card>

    <div className="container">
        {item.detail}
         <Link to={`/`}>
           <p className="mt-5">volver</p> 
         </Link>    
    </div>

   
            
        </div>
    )
}

export default ItemDetail

