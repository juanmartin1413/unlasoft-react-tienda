import React, { useContext, useState } from "react";
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


export default function ItemDetail({producto}){
    const [stock, setStock]= useState(producto.cantidad);
    //esta propiedad la uso para saber si el usuario ya agrego los items al carrito y entonces
    //quiere "finalizar la compra"
    const [compraFinalizada, setCompraFinalizada]= useState();
    const {cart, addToCart}=useContext(CartContext);

    function agregarItems(cantidadComprada){
        setCompraFinalizada(true);
        addToCart(producto,cantidadComprada);
    }

    return (
        <div className="card">
            <img className="card-img-top" src={producto.img} alt="Card image cap"></img>
            <div className="card-header">
                <h4>${producto.precio}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <p className="card-text">{producto.descripcion}</p>
                {
                !compraFinalizada?<ItemCount stock={stock} valorInicial={1} onAdd={agregarItems}/>:
                <Link to="/cart" className="btn btn-primary">Finalizar compra</Link>
                }
            </div>
        </div>
    );
}