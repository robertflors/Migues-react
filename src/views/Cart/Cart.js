import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import './Cart.css'
import papelera from '../../img/papelera.png';


function Cart() {
const {cart, clear, removeItem} = useContext(CartContext);

return (
<div>
    <h2>Carrito</h2>
    {cart.length > 0 ?
    <div>
    <Table hover>
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
                <td><img src={producto.item.pictureUrl} className="cartTable__img" alt={producto.item.title} /></td>
                <td>{producto.item.title}</td>
                <td>{producto.item.price}</td>
                <td>{producto.quantity}</td>
                <td>{producto.quantity*producto.item.price}</td>
                <td><button className="btn" onClick={()=>removeItem(producto.item)}><img src={papelera} className="cartTable__btnBorrar" alt="papelera" /></button></td>
            </tr>)            
            })}
            <tr>
                {/* tenemos una fila donde aparecerá el total de toda la compra, la dorma de obtenerlo fue haciendo un map que devuelva todos los subtotales y a este mismo hacerle un reduce que sume estos valores del array */}
                <td colSpan="6" style={{textAlign : 'center'}}>total: {cart.map(obj => obj.item.price * obj.quantity).reduce((a,b)=> a + b)}</td>
            </tr>
        </tbody>
    </Table>
    <button className="btn btn-danger" onClick={()=>clear()}>Eliminar todo</button> 
    </div> 
    :
    <>
    <h4>Tu carrito está vacío</h4>
    <Link to='/' style={{textDecoration : 'none'}}>
      volver
    </Link>
    </>
    }
    

</div>
 )
}

export default Cart