import React from 'react'
import './CartWidget.styles.css'
import { useState } from 'react'

const CartWidget = () => {
  let {cantidadProductos, setCantidadProductos} = useState(0)
  cantidadProductos = 0

  return (
    <div className='btn-container'>
      <div class="contadorCarrito"><p id="numero" setCantidadProductos={setCantidadProductos}>{cantidadProductos}</p></div>
      <button className="btn btn-ligth" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon name="cart-outline"></ion-icon></button>
    </div>
  )
}

export default CartWidget;