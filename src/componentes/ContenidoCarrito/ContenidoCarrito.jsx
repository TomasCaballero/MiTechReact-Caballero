import "./ContenidoCarrito.styles.css"
import { CartContext } from "../../context/cartContext"
import { useContext } from "react"

const rutaInicial = '../img/'

const ContenidoCarrito = () => {
  const {cart, removeItem} =useContext(CartContext)
  return (
    <div className="contenidoMiniCarrito">
        {cart.length === 0 ? 
        (
        <div className="carritoVacio">
            <h2>El carrito esta vacio.</h2>
        </div>
        ) : (
        <div className="contendorCarrito">
            {cart.map((item)=>(
                <div className="card" key={item.id}>
                  <div className='imgTituloMiniCart'>
                    <img src={rutaInicial + item.img} alt={item.articulo} width={'200px'}/>
                    <h5>{item.articulo}</h5>
                  </div>
                  <div className="card-body">
                    <div className=''>
                        <p><strong>uS${item.precio}</strong></p>
                    </div>
                    <div className="card-body">
                      <div className=''>
                        <h5>Detalles:</h5>
                        <p>Bateria: {item.bateria}mAh</p>
                        <p>Almacenamiento: {item.memoria}GB</p>
                        <p>Memoria RAM: {item.ram}GB</p>
                      </div>
                      </div>
                      <div className="cantidadMinicart">
                        <h5 className="contenidoCantidad">Cantidad: {item.cantidad}</h5>
                      </div>
                  </div>
                  <div className="btnRemove">
                    <button className='btn btn-dark pl-2 irAlCarrito' onClick={()=> removeItem(item.id)}>Eliminar</button>
                  </div>
                </div>
            ))}
        </div>)}
    </div>
)
}

export default ContenidoCarrito;