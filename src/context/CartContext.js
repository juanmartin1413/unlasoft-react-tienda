import react, {createContext, useState} from 'react';

export const CartContext =createContext([]);

export default function CartContextProvider({children}){
    const [cart, setCart]=useState([]);

    const addToCart = (producto,cantidadComprada)=>{
        setCart([...cart, {...producto, cantidadComprada}]);
    }

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}
    

