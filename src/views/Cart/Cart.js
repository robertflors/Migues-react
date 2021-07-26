import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './Cart.css'
import papelera from '../../img/papelera.png';
import OrderForm from '../../components/OrderForm/OrderForm';
import { db } from '../../Firebase/Firebase';


function Cart() {
    const { cart, clear, removeItem } = useContext(CartContext);

    const addOrder = async (object) => {
        const { id } = await db.collection('ordenes').add(object)
        clear()
        console.log(id);
        alert(`gracias por tu compra, tu número de orden es ${id}`)
    }
    
    const totalCompra = cart.length>0 ? cart.map(obj =>obj.item.price * obj.quantity).reduce((a, b) => a + b) : undefined;

    return (
        <div>
            <h2>Carrito</h2>
            {/* OPERADOR TERNARIO EL CUAL SI EL CARRITO ESTÁ VACÍO NO MUESTRA LA TABLA Y EN CAMBIO APARECE UNA RUTA AL INICIO */}
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
                            {cart.map((producto) => {
                                return (<tr key={producto.id}>
                                    <td>
                                        <Link to={`/detalles/${producto.id}`}>
                                            <img src={producto.item.pictureUrl} className="cartTable__img" alt={producto.item.title} />                    
                                        </Link> 
                                    </td>
                                    <td><Link to={`/detalles/${producto.id}`} style={{textDecoration : 'none', color: 'black'}}>{producto.item.title}</Link></td>
                                    <td>{producto.item.price}</td>
                                    <td>{ producto.quantity}</td>
                                    <td>{producto.quantity * producto.item.price}</td>
                                    <td><button className="btn" onClick={() => removeItem(producto.item)}><img src={papelera} className="cartTable__btnBorrar" alt="papelera" /></button></td>
                                </tr>)
                            })}
                            {/* FILA QUE MUESTRA EL TOTAL DE LA COMPRA */}
                            <tr>                               
                                <td colSpan="6" style={{ textAlign: 'center', fontWeight: 'bold' }}>total : {totalCompra}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <button className="btn btn-danger" onClick={() => clear()}>Eliminar todo</button>
                    {/* EL COMPONENTE ORDERFORM DESDE EL SE OBTIENE LA INFORMACIÓN DEL USUARIO Y SE ACTIVA EL EVENTO QUE CREA LA ORDEN DE COMPRA  */}
                    <OrderForm addOrder={addOrder} cart={cart} total={totalCompra}/>
                </div>
                :
                <>
                    <h4>Tu carrito está vacío</h4>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        volver
                    </Link>
                </>
            }


        </div>
    )
}

export default Cart