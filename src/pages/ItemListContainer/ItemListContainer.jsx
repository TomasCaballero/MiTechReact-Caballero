import data from "../../componentes/MockData/MockData"
import { useEffect, useState } from "react"
import ItemList from "../../componentes/ItemList/ItemList"
// import { useParams } from "react-router-dom"

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

    // const {marca} = useParams();
    // console.log(marca)
    // if(marca){
    //     const filterData = data.filter((item) => item.marca === marca)
    //     setProductList(filterData)
    // }else{
    //     const filterData = data
    //     setProductList(data)
    // }
    
    
  return (
    <>
        <ItemList lista={productList}/>
    </>
  )
}

export default ItemListContainer;