import data from "../../componentes/MockData/MockData"
import { useEffect, useState } from "react"
import ItemList from "../../componentes/ItemList/ItemList"

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        getProducts.then((response)=>{
            setProductList(response)
        })
    }, )

    const getProducts = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        }, 2000);
    });
  return (
    <>
        <ItemList lista={productList}/>
    </>
  )
}

export default ItemListContainer;