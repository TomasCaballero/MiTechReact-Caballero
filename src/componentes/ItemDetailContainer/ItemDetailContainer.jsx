import data from "../MockData/MockData"
import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState([])

    useEffect(()=>{
        getProducts.then((response)=>{
          setProductDetail(response)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getProducts = new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(data.filter(e=>e.id === 1));
        }, 2000);
    });
  return (
    <>
     <ItemDetail lista={productDetail}/>
    </>
  )
}
export default ItemDetailContainer;