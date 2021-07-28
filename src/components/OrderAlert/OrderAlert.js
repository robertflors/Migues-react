import React from 'react';
import {Alert} from 'react-bootstrap';

function OrderToast({id}) {
    
return (
<div>
    <Alert variant='success'>Gracias por tu compra, su número de orden es {id}</Alert>
</div>
)
}

export default OrderToast