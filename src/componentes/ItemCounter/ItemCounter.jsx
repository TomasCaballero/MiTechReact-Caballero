import './ItemCounter.style.css'
import { useState } from 'react'


let numero = document.querySelector('.numero');


const ItemCounter = ({inicial}) => {
    const [contador, setContador] = useState(inicial)
    const [stock, setStock] = useState(5)
    
    const disminuir = ()=>{
        if(contador === inicial){
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
            <h4>Iphone 11</h4>
            <div className='d-flex'>
                <div className='mx-2'>Cantidad: <span>{contador}</span></div>
                <button onClick={aumentar} className="btn btn-success">+</button>
                <button onClick={disminuir} className="btn btn-danger">-</button>
            </div>
            <button className='btn btn-dark' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    </>
    
  )
}

export default ItemCounter