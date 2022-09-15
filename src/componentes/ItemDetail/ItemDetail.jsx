import './ItemDetail.style.css'


const ItemDetail = ({lista}) => {
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
                </div>
              </div>
          )) 
        }
  </div>
  )
}

export default ItemDetail;