import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContextProvider from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="container">         
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Curso React Coderhouse"/>}/>
            <Route path="/producto/:productoId" element={<ItemDetailContainer/>}/>
            <Route path="/categoria/:categoriaNombre" element={<ItemListContainer greeting="Categoria"/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
