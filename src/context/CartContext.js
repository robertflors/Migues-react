import React, {useState , createContext} from 'react';

 export const CartContext = createContext();

 export const CartProvider = ({children}) => {
     const [cart, setCart] = useState([]);

     const addItem = (nuevoItem , cant, id) =>{
         // verificamos que el item agregado al carrito no exista previamente, creando una variable
         let newItem = cart.find(obj => obj.id === id);
       
         if (newItem !== undefined ){
        // en el caso que exista ubicamos su posición en el carrito y modificamos su cantidad          
            let i = cart.indexOf(newItem); 
        // condicional para que el quantity no exceda al stock del producto
            if ((cart[i].quantity + cant) < newItem.item.stock){
                cart[i].quantity += cant;
            } else{
                cart[i].quantity = newItem.item.stock;
            }
            
            
         }  else{
            //  caso contrario lo pusheamos al estado
            const newCart = [...cart];
            newCart.push({item: nuevoItem , quantity: cant, id: id});
           
            setCart(newCart);         
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
