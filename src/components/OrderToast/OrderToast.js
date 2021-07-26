import React from 'react';
import {Toast} from 'react-bootstrap';

function OrderToast({date, id}) {
return (
<div>
    <Toast>
        <Toast.Header>
            <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
            <strong className="me-auto">Orden enviada</strong>
            <small>{date}</small>
        </Toast.Header>
        <Toast.Body>Gracias por tu compra, su número de orden es {id}</Toast.Body>
    </Toast>

</div>
)
}

export default OrderToast