import './CartOffCanvas.styles.css'
import ContenidoCarrito from '../ContenidoCarrito/ContenidoCarrito'
import { Link } from 'react-router-dom'

const CartOffCanvas = () => {
  return (
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Tu Carrito</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="py-2 d-flex align-content-center justify-content-center mx-auto mb-1">US$<div class="precioTotal"></div></div>
        <Link to={"/cart"} style={{ textDecoration: 'none'}} className='irAlCarrito'>
          <button id="comprar" class="btn btn-dark border-1 border-light w-25 py-2 d-flex align-content-center justify-content-center mx-auto mb-1">Ir a pagar</button>
        </Link>
        <div className="offcanvas-body">
            <ContenidoCarrito />
        </div>
    </div>
  )
}

export default CartOffCanvas