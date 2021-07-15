import React, {useState} from 'react'
import {Form, Button, Modal} from 'react-bootstrap';
import firebase from "firebase/app";
import 'firebase/firestore';

function OrderForm({addOrder, cart}) {
// MODAL DE REACT-BOOTSTRAP
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
// FIN MODAL REACT-BOOTSTRAP

// UN INICIADOR PARA EL ESTADO BUYER, CUYO VALOR SALDRÁ DEL FORM
const initialBuyer = {
    nombre: '',
    email: '',
    telefono: '',
}
// LA FECHA EN LA CUAL FUE HECHA LA COMPRA
const date = firebase.firestore.Timestamp.fromDate(new Date());
// EN ESTA PARTE MANEJAMOS LOS DATOS INGRESADOS POR EL USUARIO EN EL FORMULARIO DE COMPRA
const [buyer, setBuyer] = useState(initialBuyer);

const handleOnChange = (e) => {
    const {name, value } = e.target;
    setBuyer({...buyer, [name]: value});
}
// AGREGAMOS LA ORDEN A LA COLECCIÓN DE FIREBASE
const [order, setOrder] = useState({});

const handleOnSubmit = (e) => {
    // --------------------------------------------------------------------------------
    // ------HACIENDO PRUEBAS, HAY UN ERROR, EL OBJETO ORDER SE SUBE VACÍO AL FIREBASE-
    // ------CUANDO HACES PRUEBAS CON EL CONSOLE.LOG LÍNEA 54 HAY UN PUNTO EN EL QUE SI LE LLEGA
    // ------EL OBJETO CON LA INFORMACIÓN, PERO PREVIAMENTE LLEGA VACÍO POR CONSOLA, DEBE SER
    // ------LO QUE PASA CON EL FIREBASE, ESTOY HACIENDO DIVERSAS PRUEBAS CON ASINCRONISMO
    // ------PERO NO TENGO ÉXITO CON ELLO.
    e.preventDefault(); 
    const promise = new Promise((resolve, reject) => {
        
        JSON.stringify(order) === '{}' ?
        resolve(setOrder({ buyer: buyer, items: cart, date: date })) : reject(new Error('Hubo un problema cargando el producto'));
    });
    
    promise.then(addOrder(order)).catch(error =>console.error(error));
    
    // await console.log(order);

    // if (JSON.stringify(order) !== '{}'){
    //     addOrder(order);        
    // } else {
    //     console.log('no sirvió');
    // }
    // addOrder(order);
}
console.log(order);






return (
<>
    <Button variant="primary" onClick={handleShow}>
        Completar compra
    </Button>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Formulario de compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre Apellido" name='nombre' value={buyer.nombre} onChange={handleOnChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="nombre@example.com" name='email' value={buyer.email} onChange={handleOnChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNumber">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" placeholder="teléfono" name='telefono' value={buyer.telefono} onChange={handleOnChange}/>
                    <Form.Text className="text-muted">
                        incluir el código telefónico correspondiente.                         
                    </Form.Text>
                </Form.Group>                
                
                <Form.Group>
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="text" placeholder='fecha' readOnly />
                </Form.Group>
                
                <Button variant="primary" type="submit" onClick={handleClose}>
                    Finalizar Compra
                </Button>
            </Form>
        </Modal.Body>

    </Modal>
</>
);

}

export default OrderForm;