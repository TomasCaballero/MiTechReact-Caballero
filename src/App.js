import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import CartOffCanvas from './componentes/CartOffCanvas/CartOffCanvas';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
// import { CartContext } from './context/cartContext';
import { CartProvider } from './context/CartProvider';




function App() {
  
  return (
    <CartProvider>
      <BrowserRouter className="App App-header">
        <Navbar/>
        <CartOffCanvas/>
        <Routes>
          <Route path="/" element={<Titulo/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="category/:marca" element={<ItemListContainer/>}/> 
          <Route path='details/:id' element={<ItemDetailContainer/>}/>
          <Route path="cart" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
