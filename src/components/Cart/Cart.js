import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';


export default function Cart(){
    const {cart}=useContext(CartContext);
    
    return (
        <div class="container">
            {cart.lenght>0?
                cart.map(function(producto){
                    <div key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <h3>stock:{producto.cantidad}</h3>
                        <h3>Cantidad comprada:{producto.cantidadComprada}</h3>
                    </div>
                }):
                <h5>Carrito vacio</h5>
            }
            
        </div>
    );
}