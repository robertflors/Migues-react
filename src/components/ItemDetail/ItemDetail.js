// import axios from 'axios';
// import React, {useEffect , useState} from 'react';
// import { Link } from 'react-router-dom';


// function ItemDetailContainer() {
//     const [detail, setDetail] = useState([]);

//     useEffect(() => {
//         setTimeout(()=>{
//             axios('json/Detail.json')
//            .then(respuesta => setDetail(respuesta.data));    
//         }, 2000);     
//     }, []);
//     console.log("detalles" , detail);

//     return (
        
//         <div>
//             {detail.map((item) => {
//                 return (
//                     <div key={item.id}>
//                         <Link to={`/detalles/${item.id}`}>
//                             <Item data={item} />
//                         </Link>    
//                     </div>    
//                 )
//             })

//             }                               
//         </div>
//     )
// }

// export default ItemDetailContainer

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ItemDetail( { match }) {
//     let itemID = match.params.id;
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//             axios('json/Detail.json')
//            .then(respuesta => setItems(respuesta.data));    
//     }, []);

//     let itemDetallado = items.filter(item => item === itemID);
//     console.log("detallado" , itemDetallado);
//     return (
//         <div>
//             detalle de item
            
//         </div>
//     )
// }

// export default ItemDetail
