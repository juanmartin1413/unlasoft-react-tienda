import React from "react";
import "./Item.css";
import {Link} from 'react-router-dom'

export default function Item({item}){

    return (
        <div className="col-4">
            <div className="card">
                <Link to={`/producto/${item.id}`}>
                <img className="card-img-top" src={item.img} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{item.titulo}</h5>
                    <p className="card-text">$ {item.precio}</p>
                    <button href="#" className="btn btn-primary">Comprar</button>
                </div>              
                </Link>
            </div>
        </div>
    );
}