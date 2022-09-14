import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import CartOffCanvas from './componentes/CartOffCanvas/CartOffCanvas';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
// import ItemCounter from './componentes/ItemCounter/ItemCounter';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
      <BrowserRouter className="App App-header">
        <Navbar/>
        <CartOffCanvas/>
        <Routes>
          <Route path="/" element={<Titulo/>}/>
        </Routes>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path='details/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>


    // <div className="App">
    //   <Navbar />
    //   <CartOffCanvas />
    //   <main className="App-header">
    //     <Titulo />
    //     <div>
    //       <ItemDetailContainer/>
    //       <ItemListContainer/>
    //     </div>
    //   </main>
    // </div>
  );
}

export default App;
