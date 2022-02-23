import react, {createContext, useState} from 'react';

export const CartContext =createContext([]);

export default function CartContextProvider({children}){
    const [cart, setCart]=useState([]);

    const estaEnCarrito= (id) =>{
        const articulo= cart.some((prod)=>prod.id===id);

        return !articulo?false:true;
    }

    const addToCart = (producto,cantidadComprada)=>{
        if(estaEnCarrito(producto.id)){
            alert('El articulo ya esta en el carrito');
        }
        else{
            setCart([...cart, {...producto, cantidadComprada}]);
        }
        
    }

    const vaciarCarrito = () =>{
        setCart([]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    );
}
    

