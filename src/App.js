import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import CartOffCanvas from './componentes/CartOffCanvas/CartOffCanvas';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartProvider';
import Cart from './componentes/Cart/Cart';




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
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
