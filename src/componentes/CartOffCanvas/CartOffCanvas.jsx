import './CartOffCanvas.styles.css'
import ContenidoCarrito from '../ContenidoCarrito/ContenidoCarrito'
import { Link } from 'react-router-dom'
import { useContext, useState } from "react"
import { CartContext } from "../../context/cartContext"

const CartOffCanvas = () => {
  const {cart, cartLength} =useContext(CartContext)
  // eslint-disable-next-line no-unused-vars
  let [precioTotal, setPrecioTotal] = useState(0)
  precioTotal = cart.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Tu Carrito contiene {cartLength} productos</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="py-2 d-flex align-content-center justify-content-center mx-auto mb-1">US$<div className="precioTotal">{precioTotal}</div></div>
        <Link to={"/cart"} style={{ textDecoration: 'none'}} className='irAlCarrito'>
          <button id="comprar" className="btn btn-dark border-1 border-light w-25 py-2 d-flex align-content-center justify-content-center mx-auto mb-1" data-bs-dismiss="offcanvas">Ir a pagar</button>
        </Link>
        <div className="offcanvas-body bg-dark">
            <ContenidoCarrito />
        </div>
    </div>
  )
}

export default CartOffCanvas