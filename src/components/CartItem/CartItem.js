import {react} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './CartItem.css';

export default function CartItem({item}){
    return (
        
            <tr>
                <th scope="row">{item.titulo}</th>
                <td>{item.descripcion}</td>
                <td>{item.precio}</td>
            </tr>              

    );
}