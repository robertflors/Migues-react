import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import {Card , Button} from 'react-bootstrap';


function Cart() {
const {cart, clear, removeItem} = useContext(CartContext);
return (
<div>
    <h2>Carrito</h2>
    {/* <Table striped bordered hover>
        <thead>
            <th colSpan="2">producto</th>
            <th>precio</th>
            <th>cantidad</th>
            <th>subtotal</th>
            <th>eliminar</th>
        </thead>
        <tbody>
            {cart.map((producto)=>{
            return (<tr key={producto.item.id}>
                <td><img src={producto.item.pictureUrl} alt={producto.item.title} /></td>
                <td>{producto.item.title}</td>
                <td>{producto.item.price}</td>
                <td>{producto.quantity}</td>
                <td>{producto.quantity*producto.item.price}</td>
                <td><button className="btn" onClick={removeItem(producto.item)}>eliminar</button></td>
            </tr>)
            })}
        </tbody>
    </Table>

    <button className="btn" onClick={clear()}>Eliminar todo</button> */}
    <div>
        <button className="btn" onClick={()=>clear()}>Eliminar Todos</button>
    {cart.map((producto) => {
        return (
        <Card style={{ width: '18rem' }} key={producto.item.id}>
            <Card.Img variant="top" src={producto.item.pictureUrl} />
            <Card.Body>
                <Card.Title>{producto.item.title}</Card.Title>
                <Card.Text>
                   <p>{producto.item.price}$</p>
                   <p>cantidad: {producto.quantity}</p>
                   <p>subtotal: {producto.quantity*producto.item.price}$</p>
                </Card.Text>
                <Button variant="primary" onClick={()=>removeItem(producto.item)}>eliminar</Button>
            </Card.Body>
        </Card>)
    })}

    </div>
    

</div>
 )
}

export default Cart