import Item from "../Item/Item";
import './ItemList.css'
import { Link } from "react-router-dom";
const ItemList = ({lista}) => {
  return (
    <div className="contenedorProductos">
        {
          lista.map((product) => (
            <Link key={product.id} to={"details/" + product.id}>
              <Item articulo={product.articulo} precio={product.precio} img={product.img}/>
            </Link>
          ))
        }
    </div>
  )
}

export default ItemList;