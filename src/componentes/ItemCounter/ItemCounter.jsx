import './ItemCounter.style.css'
import { useState } from 'react'


let numero = document.querySelector('.numero');


const ItemCounter = () => {
    let valorInicial = 1;
    let stockProductos = 5;
    const [contador, setContador] = useState(valorInicial)
    const [stock, setStock] = useState(stockProductos)
    
    const disminuir = ()=>{
        if(contador === valorInicial){
            setContador(contador - 0)
        }else{
            setContador(contador - 1)
        }
    }

    const aumentar = ()=>{
        if(contador === stock){
            setContador(contador + 0)
        }else{
            setContador(contador + 1)
        }
    }

    const agregarAlCarrito = ()=>{
        numero.innerHTML = parseInt(numero.innerHTML)  + parseInt(contador);
        setStock(stock - contador)
    }
    
  return (
    <>
        <div className='mt-5'>
            <div className='d-flex'>
                <div className='mx-2'>Cantidad: <span>{contador}</span></div>
                <button onClick={disminuir} className="btn btn-dark">-</button>
                <button onClick={aumentar} className="btn btn-dark mx-1">+</button>
            </div>
            <button className='btn btn-dark mt-1 pl-2' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    </>
    
  )
}

export default ItemCounter