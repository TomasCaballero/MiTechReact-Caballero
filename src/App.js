import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import CartOffCanvas from './componentes/CartOffCanvas/CartOffCanvas';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
// import ItemCounter from './componentes/ItemCounter/ItemCounter';
// import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <div className="App">
      <Navbar />
      <CartOffCanvas />
      <main className="App-header">
        <Titulo />
        <div>
          <ItemListContainer/>
          {/* <ItemDetailContainer/> */}
        </div>
      </main>
    </div>
  );
}

export default App;
