import Item from "../Item/Item";
import './ItemList.css'
const ItemList = ({lista}) => {
  return (
    <div className="contenedorProductos">
        {
            lista.map((product) => (
                <Item articulo={product.articulo} precio={product.precio} img={product.img} key={product.id}/>
            ))
        }
    </div>
  )
}

export default ItemList;