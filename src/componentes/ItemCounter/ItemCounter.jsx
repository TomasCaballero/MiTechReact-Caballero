import './ItemCounter.style.css'

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
    
    return (
    <>
        <div className='mt-5 itemCounter'>
            <div className='d-flex'>
                <div onClick={disminuir} className="btnDisminuir" role='button'>-</div>
                <div className='mx-2'>Cantidad: <span>{contador}</span></div>
                <div onClick={aumentar} className="btnAumentar" role='button'>+</div>
            </div>
        </div>
    </>
    
    )
}

export default ItemCounter