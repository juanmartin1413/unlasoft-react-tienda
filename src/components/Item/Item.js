import React from "react";
import "./Item.css";
import {Link} from 'react-router-dom'

export default function Item({item}){
    /*
    pendiente de agregar <img src={item.img} className="card-img-top" alt={item.titulo}/>
    */
    return (
        <div className="card">
            <Link to={`/producto/${item.id}`}>
            <img className="card-img-top" src={item.img} alt="Card image cap"></img>
            <div className="card-body">
                <h5 className="card-title">{item.titulo}</h5>
                <p className="card-text">$ {item.precio}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
            
            </Link>
        </div>
    );
}