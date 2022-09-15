import './Item.style.css'
import ItemCounter from "../ItemCounter/ItemCounter"

const Item = ({img, articulo, precio, id, marca, valorInicial, stockProductos}) => {
  return (
    <>
        <div className="card" key={id} role="button">
            <img src={img} alt={articulo} width={'200px'}/>
            <div className="card-body">
                <h5>{articulo}</h5>
                <p>uS${precio}</p>
                <span style={{display: 'none'}}>{marca}</span>
                <hr/>
                <ItemCounter inicial={valorInicial} stock={stockProductos}/>
            </div>
        </div>
    </>
  )
}

export default Item;