import './ItemCounter.style.css'
import { Link } from 'react-router-dom'



let numero = document.querySelector('#numero');


const ItemCounter = ({setContador, setStock, valorInicial, stockProductos, contador, stock}) => {

    const disminuir = ()=>{
        if(contador === valorInicial){
            return;
        }
        setContador(contador - 1)
        
    }

    const aumentar = ()=>{
        if(contador === stockProductos){
            return;
        }
        setContador(contador + 1)
    }

    const onAdd = ()=>{
        numero.innerHTML = parseInt(numero.innerHTML)  + parseInt(contador);
        setStock(stock - contador)

    }
    
    
    return (
    <>
        <div className='mt-5 itemCounter'>
            <div className='d-flex'>
                <div onClick={disminuir} className="btnDisminuir" role='button'>-</div>
                <div className='mx-2'>Cantidad: <span>{contador}</span></div>
                <div onClick={aumentar} className="btnAumentar" role='button'>+</div>
            </div>
            <button className='btn btn-dark mt-1 pl-2 addToCart' onClick={onAdd}>Agregar al carrito</button>
        </div>
        <Link to={"/cart"} style={{ textDecoration: 'none'}} className='irAlCarrito mt-1'>
                <button className='btn btn-dark mt-1 pl-2 addToCart'>Ir al Carrito</button>
        </Link>
    </>
    
    )
}

export default ItemCounter