import data from "../../componentes/MockData/MockData"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"
// import { getDoc, getFirestore, doc } from "firebase/firestore"


const ItemDetailContainer = ({product}) => {
  const [productDetail, setProductDetail] = useState([])
  const {id} = useParams();

  const idParams = id

  useEffect(()=>{
    getProductsById.then((response)=>{
        setProductDetail(response)
      })
  },/*[]*/)

  
  const getProductsById = new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(data.filter(product=>product.id === parseInt(idParams)));
      }, 2000);
  });


  return (
    <>
      <ItemDetail lista={productDetail}/>
    </>
  )
}
export default ItemDetailContainer;



  


   // const db = getFirestore();
  // const queryDoc = doc(db, 'product', id)
  // getDoc(queryDoc)
  //   .then(()=>{})
  //   .catch((err)=> console.log(err))

  // const getProductsById = ()=>{
  //   const queryDoc = doc(db, 'product', id)
  //   getDoc(queryDoc)
  //   .then((res)=>{
  //     setProductDetail(res.data())
  //   })
  //   .catch((err)=> console.log(err))
  // }
  // useEffect(()=>{
  //   getProductsById()
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [id])