// import data from "../../componentes/MockData/MockData"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"
import { getDoc, getFirestore, doc} from "firebase/firestore"


const ItemDetailContainer = ({product}) => {
  const {id} = useParams();
  let [productDetail, setProductDetail] = useState([])
  const idParams = id

  const getProductById = new Promise((resolve, reject)=>{
    const db = getFirestore()
    const queryDoc = doc(db, 'products', idParams)
    getDoc(queryDoc).then((res)=>{
      const getDocData = {id: res.id, ...res.data()}
      const array = []
      array.push(getDocData)
      resolve(array)
    })
  });

  useEffect(()=>{
    getProductById.then((response)=>{
      setProductDetail(response)
    })
    console.log(getProductById)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
      <ItemDetail lista={productDetail}/>
    </>
  )
}
export default ItemDetailContainer;



  //----------------------------------------------------


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



  //-------------------------EL QUE FUNCIONA CON EL MOCKDATA


  // useEffect(()=>{
  //   getProductsById.then((response)=>{
  //       setProductDetail(response)
  //     })
  // },/*[]*/)

  
  // const getProductsById = new Promise((resolve, reject)=>{
  //     setTimeout(()=>{
  //       resolve(data.filter(product=>product.id === parseInt(idParams)));
  //     }, 2000);
  // });


//---------------------