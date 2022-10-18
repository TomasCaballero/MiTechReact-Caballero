import './ItemDetail.style.css'
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext';
import { useState, useContext } from 'react';

const rutaInicial = '../img/'

const ItemDetail = ({lista}) => {
  let valorInicial = 1;
  let stockProductos = 5;
  const [contador, setContador] = useState(valorInicial)
  const [stock, setStock] = useState(stockProductos)
  const {addToCart} = useContext(CartContext)
  
  const onAdd = (product)=>{
    if (contador > 0){
      addToCart(product, contador)
    }
  }
  
  return (
  <div className="contenedorProductos2">
        {
            lista.map((product) => (
              <div className="card-detail" key={product.id}>
                <div className='imgTitulo'>
                  <img src={rutaInicial + product.img} alt={product.articulo} width={'200px'}/>
                  <h5>{product.articulo}</h5>
                </div>
                <div className='divPrecio'>
                  <p><strong>uS${product.precio}</strong></p>
                </div>
                <div className="card-body">
                  <div className='divisor'>
                    <h5>Detalles:</h5>
                    <p>Bateria: {product.bateria}mAh</p>
                    <p>Almacenamiento: {product.memoria}GB</p>
                    <p>Memoria RAM: {product.ram}GB</p>
                  </div>
                </div>
                <div className='cantidad-addToCart'>
                <ItemCounter valorInicial={valorInicial} stockProductos={stockProductos} setContador={setContador} setStock={setStock} contador={contador} stock={stock}/>
                <button className='btn btn-dark mt-1 pl-2 addToCart' onClick={()=> onAdd(product)}>Agregar al carrito</button>
                </div>
                <Link to={"/cart"} style={{ textDecoration: 'none'}}>
                  <button className='btn btn-dark pl-2 irAlCarrito'>Ir al Carrito</button>
                </Link>
              </div>
          )) 
        }
  </div>
  )
}

export default ItemDetail;