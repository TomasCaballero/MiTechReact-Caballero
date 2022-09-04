import React from 'react'
import './CartWidget.styles.css'

const CartWidget = () => {
  let cantidadProductos = 0
  return (
    <div className='btn-container'>
      <div class="contadorCarrito"><p class="numero">{cantidadProductos}</p></div>
      <button className="btn btn-ligth" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon name="cart-outline"></ion-icon></button>
    </div>
  )
}

export default CartWidget;