import React, {useState , createContext} from 'react';

 export const CartContext = createContext();

 export const CartProvider = ({children}) => {
     const [cart, setCart] = useState([]);
    //  acumulador de la cantidad de productos para el cartWidget
     const [acum, setAcum] = useState(0);

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
            contadorProductos(cart);             
            
         }  else{
            //  caso contrario lo pusheamos al estado
            const newCart = [...cart];
            newCart.push({item: nuevoItem , quantity: cant, id: id});
            contadorProductos(newCart);           
            setCart(newCart);      
     }
    } 
  
     const removeItem = (Item) =>{
        const newCart = [...cart];
        let newItem = newCart.find(obj => obj.item.id === Item.id);
        let i = newCart.indexOf(newItem);
        newCart.splice(i, 1); 
        contadorProductos(newCart);
        setCart(newCart);                 
     }

     const clear = () => {
        setCart([]);
        setAcum(0);         
     }
// la función donde se cuentan los productos dentro del carrito y lo setea al acum que se usa en cartWidget
     const contadorProductos = (cart) => {
        let contador = 0;
        for (let item of cart) {
            contador = contador + item.quantity;
        }
        setAcum(contador);
     }

     return (
         <CartContext.Provider value={{cart, acum, addItem, clear, removeItem}}>
             {children}
         </CartContext.Provider>
     )
 }
