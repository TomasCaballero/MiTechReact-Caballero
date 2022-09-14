import './Item.style.css'
import ItemCounter from "../ItemCounter/ItemCounter"

const Item = ({img, articulo, precio, id, valorInicial, stockProductos, bateria, memoria, ram}) => {
  return (
    <>
        <div className="card" key={id}>
            <img src={img} alt={articulo} width={'200px'}/>
            <div className="card-body">
                <h5>{articulo}</h5>
                <p>uS${precio}</p>
                <ItemCounter inicial={valorInicial} stock={stockProductos}/>
            </div>
        </div>
    </>
  )
}

export default Item;