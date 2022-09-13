/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.styles.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div className='contenedorNavBar'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className='divIconoMarca'>
            <a className="navbar-brand iconoMarca" href="#"><ion-icon className="mx-1" name="infinite-outline"></ion-icon>MiTech</a>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex justify-content-center align-content-center">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown d-flex justify-content-center align-content-center">
                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Marcas
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item filtroGoogle">Google</a></li>
                  <li><a className="dropdown-item filtroHuawei">Huawei</a></li>
                  <li><a className="dropdown-item filtroApple">Apple</a></li>
                  <li><a className="dropdown-item filtroNothing">Nothing</a></li>
                  <li><a className="dropdown-item filtroOnePlus">OnePlus</a></li>
                  <li><a className="dropdown-item filtroSamsung">Samsung</a></li>
                  <li><a className="dropdown-item filtroXiaomi">Xiaomi</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item sinFiltro">Todas las marcas</a></li>
                </ul>
              </li>
            </ul>
            <div>
              <ul>
                <li className="divCarrito d-flex justify-content-center align-content-center">
                  <CartWidget />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  )
}

export default Navbar;