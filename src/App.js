import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar/Navbar';
import Titulo from './componentes/Titulo/Titulo';
import CartOffCanvas from './componentes/CartOffCanvas/CartOffCanvas';
import Contenido from './componentes/Contenido/Contenido';


function App() {
  return (
    <div className="App">
      <Navbar />
      <CartOffCanvas />
      <main className="App-header">
        <Titulo />
        <Contenido />
      </main>
    </div>
  );
}

export default App;
