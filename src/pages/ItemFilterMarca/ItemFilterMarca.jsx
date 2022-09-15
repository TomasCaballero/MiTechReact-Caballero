import data from "../../componentes/MockData/MockData"
import { useEffect, useState } from "react"
import ItemList from "../../componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemFilterMarca = () => {
    const [productFilter, setProductFilter] = useState([])

    const {marca} = useParams();
    useEffect(()=>{
        getProductsByMarc.then((response)=>{
            setProductFilter(response)
        })
    }, )

    const getProductsByMarc = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(data.filter(product=>product.marca === marca));
        }, 1000);
    });

  return (
    <>
        <ItemList lista={productFilter}/>
    </>
  )
}

export default ItemFilterMarca