import { Link } from 'react-router-dom'
import React from 'react'
import './Navbar.styles.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
  return (
    <div className='contenedorNavBar'>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className='divIconoMarca'>
            <Link to={"/"}>
              <div className="navbar-brand iconoMarca" role="button"><ion-icon className="mx-1" name="infinite-outline"></ion-icon>MiTech</div>
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex justify-content-center align-content-center">
                <Link to={"/"}>
                  <div className="nav-link active" aria-current="page" role="button">Home</div>
                </Link>
              </li>
              <li className="nav-item dropdown d-flex justify-content-center align-content-center">
                <div className="nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Marcas
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><div className="dropdown-item filtroGoogle">Google</div></li>
                  <li><div className="dropdown-item filtroHuawei">Huawei</div></li>
                  <li><div className="dropdown-item filtroApple">Apple</div></li>
                  <li><div className="dropdown-item filtroNothing">Nothing</div></li>
                  <li><div className="dropdown-item filtroOnePlus">OnePlus</div></li>
                  <li><div className="dropdown-item filtroSamsung">Samsung</div></li>
                  <li><div className="dropdown-item filtroXiaomi">Xiaomi</div></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><div className="dropdown-item sinFiltro">Todas las marcas</div></li>
                </ul>
              </li>
              <li className="nav-item d-flex justify-content-center align-content-center">
                <Link to={"/contacto"}>
                  <div className="nav-link active" aria-current="page" role="button">Contacto</div>
                </Link>
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