import './CartOffCanvas.styles.css'
import ContenidoCarrito from '../ContenidoCarrito/ContenidoCarrito'

const CartOffCanvas = () => {
  return (
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Tu Carrito</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="py-2 d-flex align-content-center justify-content-center mx-auto mb-1">US$<div class="precioTotal"></div></div>
        <button id="comprar" class="btn btn-dark border-1 border-light w-25 py-2 d-flex align-content-center justify-content-center mx-auto mb-1">Pagar</button>
        <div className="offcanvas-body">
            <ContenidoCarrito />
        </div>
    </div>
  )
}

export default CartOffCanvas