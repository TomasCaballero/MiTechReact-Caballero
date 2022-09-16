import data from "../../componentes/MockData/MockData"
import { useEffect, useState } from "react"
import ItemList from "../../componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    const {marca} = useParams();

    
        useEffect(()=>{
            const getProducts = new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(data);
                }, 2000);
            });
            
            if(marca === undefined){
            getProducts.then((response)=>{
                setProductList(response)
            })}else{
                getProducts
                .then((res)=>{
                    const filterData = res.filter(item => item.marca === marca)
                    setProductList(filterData)
                })
            }

        },[productList])

  return (
    <>
        <ItemList lista={productList}/>
    </>
  )
}

export default ItemListContainer;