import React from 'react';
import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'



function Item({item}) {
return (
<div>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.description}                     
            </Card.Text>
                <p>precio : {item.price}</p>
                <Link to={`/detalles/${item.id}`}>
                    <button className="btn botonInfo">+ info</button>
                </Link>              
            
        </Card.Body>
    </Card>

</div>
)
}

export default Item