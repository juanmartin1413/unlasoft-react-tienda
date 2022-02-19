import React, {useEffect, useState} from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import { getProductos } from '../../api/Api';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({greeting}){
    const [productos, setProductos]= useState([]);
    const {categoriaNombre}=useParams();

    useEffect(()=>{
        getProductos().then((items)=>{
            if(!categoriaNombre){
                setProductos(items);
            }
            else{
                const itemsCategoria= items.filter((item)=>{
                    return item.categoria.toLowerCase()===categoriaNombre;
                });
    
                setProductos(itemsCategoria);
            }

        }).catch((error)=>{
            console.log(error);
        });
        

        

        
    },[categoriaNombre]);

    function agregarItems(){
        console.log("se agregan items");
    }

    return (
        <div>
            <h1>{greeting} </h1>
            {productos.length>0?<ItemList productos={productos}/>:<p>Cargando...</p>}
            <div className='container-fluid mt-4'>
                <ItemCount stock={5} initial={1} onAdd={agregarItems}/>
            </div>
        </div>

    );
}