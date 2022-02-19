import React from "react";
import './ItemDetail.css';


export default function ItemDetail({producto}){

    return (
        <div className="card">
            <img className="card-img-top" src={producto.img} alt="Card image cap"></img>
            <div className="card-header">
                <h4>${producto.precio}</h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <a href="#" className="btn btn-primary">Comprar</a>
            </div>
        </div>
    );
}