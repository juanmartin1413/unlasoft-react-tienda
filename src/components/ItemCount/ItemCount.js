import React, {useEffect, useState} from "react";
import './ItemCount.css';

export default function ItemCount({stock, valorInicial, onAdd}){
    //esta propiedad la inicializo con stock que me viene del componente padre
    //para poder validar cuando el usuario agrega o quita cantidades y evitar que me agregue
    //mas productos de los que tengo en stock segun el componente padre
    const [valor, setValor]=useState(valorInicial);
    

    function aumentarCantidad(){
        if(valor<stock){
            setValor(valor+1);
        }
        else{
            alert('No hay suficiente stock');
        }
    }

    function disminuirCantidad(){
        if(valor>0){
            setValor(valor-1);
        }
        else{
            alert('El valor no puede ser menor a 0');
        }
    }

    return (
        <div>
            <div className="input-group">
                <input id="inptCantidad" type="text" className="form-control" value={valor}/>
                <button className="btn btn-outline-secondary" type="button" onClick={aumentarCantidad}>+</button>
                <button className="btn btn-outline-secondary" type="button" onClick={disminuirCantidad}>-</button>
            </div>
            <button className="btn btn-primary" onClick={onAdd}>Agregar items</button>

        </div>

    );
};