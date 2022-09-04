import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import CartOffCanvas from './componentes/CartOffCanvas/CartOffCanvas';
import Contenido from './componentes/Contenido/Contenido';
import ItemCounter from './componentes/ItemCounter/ItemCounter';


function App() {
  let valorInicial = 1;
  let stockProductos = 5;
  return (
    <div className="App">
      <Navbar />
      <CartOffCanvas />
      <main className="App-header">
        <Titulo />
        <Contenido />
        <ItemCounter inicial={valorInicial} stock={stockProductos}/>
      </main>
    </div>
  );
}

export default App;
