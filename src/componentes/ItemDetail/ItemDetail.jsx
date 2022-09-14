import './ItemDetail.style.css'


const ItemDetail = ({lista}) => {
  return (
  <div className="contenedorProductos">
        {
            lista.map((product) => (
              <div className="card" key={product.id}>
              <img src={product.img} alt={product.articulo} width={'200px'}/>
              <div className="card-body">
                  <h5>{product.articulo}</h5>
                  <p>uS${product.precio}</p>
                  <hr />
                  <h5>Detalles:</h5>
                  <p>Bateria: {product.bateria}mAh</p>
                  <p>Almacenamiento: {product.memoria}GB</p>
                  <p>Memoria RAM: {product.ram}GB</p>
              </div>
          </div>
          )) 
        }
  </div>
  )
}

export default ItemDetail;