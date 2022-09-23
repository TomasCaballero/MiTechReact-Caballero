import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import './Cart.style.css'

const Cart = () => {
    const {cart, clear, removeItem} =useContext(CartContext)



    return (
        <div className="contenidoCarrito">
            {cart.length === 0 ? 
            (
            <div className="carritoVacio">
                <h2>El carrito esta vacio</h2>
                <Link to={"/"} style={{ textDecoration: 'none'}}>
                    <button className='btn btn-dark pl-2 irAlCarrito'>Ver productos</button>
                </Link>
            </div>
            ) : (
            <div className="contendorCarrito">
            {cart.map((item)=>(
                <div className="cart-detail" key={item.id}>
                    <div className='imgTitulo'>
                        <img src={item.img} alt={item.articulo} width={'200px'}/>
                        <h5>{item.articulo}</h5>
                    </div>
                    <div className='divPrecio'>
                        <p><strong>uS${item.precio}</strong></p>
                    </div>
                    <div className="card-body cartBody">
                        <div className='divisorCart'>
                            <h5>Detalles:</h5>
                            <p>Bateria: {item.bateria}mAh</p>
                            <p>Almacenamiento: {item.memoria}GB</p>
                            <p>Memoria RAM: {item.ram}GB</p>
                        </div>
                    </div>
                    <div className="cantidad">
                        <h5 className="contenidoCantidad">Cantidad:</h5>
                        <h5 className="contenidoCantidad">{item.cantidad}</h5>
                    </div>
                    <div className="btnRemove">
                        <button className='btn btn-dark pl-2 irAlCarrito' onClick={()=> removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            </div>)}
            
            <div className="btnVaciarCarrito">
                <button className='btn btn-dark pl-2 irAlCarrito' onClick={()=> clear()}>Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart;