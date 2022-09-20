import './ItemDetail.style.css'
import ItemCounter from '../ItemCounter/ItemCounter';
import { useState } from 'react';


const ItemDetail = ({lista}) => {
  let valorInicial = 1;
  let stockProductos = 5;
  const [contador, setContador] = useState(valorInicial)
  const [stock, setStock] = useState(stockProductos)
  return (
  <div className="contenedorProductos">
        {
            lista.map((product) => (
              <div className="card" key={product.id}>
                <div className='imgTitulo'>
                  <img src={product.img} alt={product.articulo} width={'200px'}/>
                  <h5>{product.articulo}</h5>
                  <p>uS${product.precio}</p>
                </div>
                <div className="card-body">
                    {/* <hr /> */}
                    <h5>Detalles:</h5>
                    <p>Bateria: {product.bateria}mAh</p>
                    <p>Almacenamiento: {product.memoria}GB</p>
                    <p>Memoria RAM: {product.ram}GB</p>
                    <hr/>
                    <ItemCounter valorInicial={valorInicial} stockProductos={stockProductos} setContador={setContador} setStock={setStock} contador={contador} stock={stock}/>
                </div>
              </div>
          )) 
        }
  </div>
  )
}

export default ItemDetail;