import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import CartItem from '../CartItem/CartItem';


export default function Cart(){
    const {cart, vaciarCarrito}=useContext(CartContext);
    console.log('ingresando al componente cart');
    console.log(cart);
    console.log(cart.length);
    return (
        <div class="table-responsive-sm">
            <table className="table table-striped table-info">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                <tbody>
                    {//cart.lenght>0?
                        
                        cart.map((producto)=>(
                            <CartItem key={producto.id} item={producto}></CartItem>
                        ))/*:
                        <h5>Carrito vacio</h5>*/
                    }
                </tbody>
            </table>
            <button type="button" className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    );
}