import React from 'react'
import './CartWidget.styles.css'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'




const CartWidget = () => {
  const {cartLength} = useContext(CartContext)
  let numeroCarrito = 0 + cartLength
  return (
    <div className='btn-container'>
      <div className="contadorCarrito"><p id="numero">{numeroCarrito}</p></div>
      <button className="btn btn-ligth" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><ion-icon name="cart-outline"></ion-icon></button>
    </div>
  )
}

export default CartWidget;