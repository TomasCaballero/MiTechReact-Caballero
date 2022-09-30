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
    const queryDoc = doc(db, 'product', idParams)
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
  },/*[]*/)


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

// const dataBase = getFirestore();

// const getProductsById = new Promise((resolve, reject)=>{
//   const queryDoc = doc(dataBase, 'product', id)
//   getDoc(queryDoc)
//   .then((res)=>{
//     setProductDetail(res.data())
//   })
//   .catch((error)=> console.log(error))
//   setTimeout(()=>{
//     resolve(queryDoc.filter(product=>product.id === parseInt(idParams)));
//   }, 2000);
// });


// useEffect(()=>{
//   getProductsById.then((response)=>{
//       setProductDetail(response)
//     })
// },/*[]*/)


//-----------------------------------
  // const dataBase = getFirestore();
  // useEffect(()=>{
  //   const getProductsById = new Promise((resolve, reject)=>{
  //     const queryDoc = doc(dataBase, 'product', id)
  //     getDoc(queryDoc)
  //     .then((res)=>{
  //       setProductDetail(res.data())
  //       console.log(productDetail)
  //     })
  //     .catch((error)=> console.log(error))
  //   });

  //   getProductsById.then((response)=>{
  //       setProductDetail(response)
  //     })
  // },/*[]*/)



  //-----------------
  // const db = getFirestore();
  // const queryDoc = doc(db, 'product', id)


  // useEffect(()=>{
  //   getProductsById.then((response)=>{
  //     setProductDetail(response)
  //   })
  // },/*[]*/)

  
  // const getProductsById = new Promise((resolve, reject)=>{
  //     setTimeout(()=>{
  //       resolve(queryDoc.filter(product=>product.id === parseInt(idParams)));
  //     }, 2000);
  // });



  //---------------------------------
  /*const {id} = useParams();
  let [productDetail, setProductDetails] = useState([])
  const idParams = id

  useEffect(()=>{
    getProductById()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getProductById = ()=>{
    const db = getFirestore();
    const queryDoc = doc(db, 'product', idParams);
    getDoc(queryDoc).then((res)=>{
      const getDocData = res.data()
      setProductDetails(getDocData)
      console.log(productDetail)
    })
  }*/


  //--------------------------EL ULTIMO
  // useEffect(()=>{
  //   getProductById()
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // const getProductById = ()=>{
  //   const db = getFirestore();
  //   const queryDoc = doc(db, 'product', idParams);
  //   getDoc(queryDoc).then((res)=>{
  //     const getDocData = {id: res.id, ...res.data()}
  //     console.log(getDocData)
  //     setProductDetail(getDocData)
  //     console.log(productDetail)
  //   })
  // }