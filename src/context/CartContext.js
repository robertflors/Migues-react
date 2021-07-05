import React, {useState , createContext} from 'react';

 export const CartContext = createContext();

 export const CartProvider = ({children}) => {
     const [cart, setCart] = useState([]);

     const addItem = (nuevoItem , cant) =>{
         // verificamos que el item agregado al carrito no exista previamente, creando una variable
         let newItem = cart.find(obj => obj.item.id === nuevoItem.id);
       
         if (newItem !== undefined ){
        // en el caso que exista ubicamos su posición en el carrito y modificamos su cantidad          
            let i = cart.indexOf(newItem);
            cart[i].quantity += cant;

         }  else{
            //  caso contrario lo pusheamos al estado
            const newCart = [...cart];
            newCart.push({item: nuevoItem , quantity: cant});
           
            setCart(newCart);     
            console.log('carrito' , cart);
         
     }
    }
   
     const removeItem = (Item) =>{
        const newCart = [...cart];
        let newItem = newCart.find(obj => obj.item.id === Item.id);
        let i = newCart.indexOf(newItem);
        newCart.splice(i, 1); 
        setCart(newCart);                 
     }

     const clear = () => {
        setCart([]);         
     }

     return (
         <CartContext.Provider value={{cart, addItem, clear, removeItem}}>
             {children}
         </CartContext.Provider>
     )
 }
