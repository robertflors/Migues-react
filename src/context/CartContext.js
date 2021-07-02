import React, {useState , createContext} from 'react';

 export const CartContext = createContext();

 export const CartProvider = ({defaultValue=[], children}) => {
     const [cart, setCart] = useState(defaultValue);

     const addItem = (nuevoItem , cant) =>{
        //  creamos una copia del estado
         const newCarrito = [...cart];
         let newItem = newCarrito.find((obj) => obj.id === nuevoItem.id);
        // verificamos que el item agregado al carrito no exista previamente
         if (newItem !== undefined){
        // en el caso que exista ubicamos su posición en el carrito y modificamos su cantidad
            // let i = newCarrito.indexOf(newItem);
            // newCarrito[i].cantidad += cant;
            console.log("si mano, ya está en el carrito" , newItem);

         }  else{
        // en el caso que no exista, agregamos una nueva propiedad "cantidad" al item y lo pusheamos al carrito
            //  Object.defineProperty(newItem, 'cantidad', {
            //     value: cant,
            //     writable: true,
            //     enumerable: true,
            //     configurable: true
            //   })
            newCarrito.push(nuevoItem);
         }       
        //  y por último lo seteamos en el estado
         setCart(newCarrito);
         console.log('carrito' , newItem);
         
     }

    //  const isInCart = () => {
         
    //  }
     console.log('carritoOficialXD' , cart);
     return (
         <CartContext.Provider value={{cart, addItem}}>
             {children}
         </CartContext.Provider>
     )
 }
