import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap';
import firebase from "firebase/app";
import 'firebase/firestore';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function OrderForm({ addOrder, cart, total }) {
    // MODAL DE REACT-BOOTSTRAP
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // FIN MODAL REACT-BOOTSTRAP

    // VALIDACIÓN DEL FORMULARIO CON FORMIK Y YUP
    const formik = useFormik({
        initialValues: {
            nombre: '',
            email: '',
            telefono: ''
        },

        validationSchema: Yup.object({
            nombre: Yup.string().required('campo obligatorio'),
            email: Yup.string().email('ingresa un email válido').required('campo obligatorio'),
            telefono: Yup.string().required('campo obligatorio')
        }),

        onSubmit: (buyer) => {
            const newOrder = {buyer:buyer, items:cart, date, total:total};
            addOrder(newOrder);

        }
    })

    // LA FECHA EN LA CUAL FUE HECHA LA COMPRA
    const date = firebase.firestore.Timestamp.fromDate(new Date());

    // fecha para vista del usuario
    let today = new Date();
    const fecha = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

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

                    {/* -------------------------------------------------------FORMULARIO DENTRO DEL MODAL------------------------------------------------------------------ */}
                    <Form onSubmit={formik.handleSubmit}>
                        
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Nombre Apellido" name='nombre' onChange={formik.handleChange} error={formik.errors.nombre}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="nombre@example.com" name='email' onChange={formik.handleChange} error={formik.errors.email}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicNumber">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="text" placeholder="teléfono" name='telefono' onChange={formik.handleChange} error={formik.errors.telefono}/>
                            <Form.Text className="text-muted">
                                incluir el código telefónico correspondiente.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="text" placeholder={fecha} readOnly />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Total</Form.Label>
                            <Form.Control type="text" placeholder={total} readOnly />
                        </Form.Group>

                        <Button variant="dark" type="submit">
                            Finalizar Compra
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );

}

export default OrderForm;