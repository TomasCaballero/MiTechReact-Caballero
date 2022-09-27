import data from "../../componentes/MockData/MockData"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"
// import { getDoc, getFirestore, doc } from "firebase/firestore"


const ItemDetailContainer = ({product}) => {
  const {id} = useParams();
  const [productDetail, setProductDetail] = useState([])
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






  //-------------------------
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