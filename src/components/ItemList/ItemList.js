import React, { useEffect } from "react";
import "./ItemList.css";
import Item from "../Item/Item";


export default function ItemList({productos}){
    useEffect(()=>{
        console.log(productos);
    },[]);

    return (
        <div>
            {
                productos.map(function(producto){
                    return (
                        <Item key={producto.id} item={producto}/>
                    )
                })
            }
        </div>
    );
}