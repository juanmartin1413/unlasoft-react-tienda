import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes,Rout, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="container">         
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Curso React Coderhouse"/>}/>
            <Route path="/producto/:productoId" element={<ItemDetailContainer/>}/>
            <Route path="/categoria/:categoriaNombre" element={<ItemListContainer greeting="Categoria"/>}/>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
