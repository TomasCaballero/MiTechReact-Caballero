import data from "../../componentes/MockData/MockData"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ItemDetail from "../../componentes/ItemDetail/ItemDetail"


const ItemDetailContainer = ({product}) => {
  const [productDetail, setProductDetail] = useState([])
  const {id} = useParams();
  const idParams = id
  console.log(idParams)

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

// const [productDetail, setProductDetail] = useState([])

  // useEffect(()=>{
  //     getProducts.then((response)=>{
  //       setProductDetail(response)
  //     })
  // },/*[]*/)

  // const getProducts = new Promise((resolve, reject)=>{
  //     setTimeout(()=>{
  //       resolve(data/*.filter(e=>e.id === 1)*/);
  //     }, 2000);
  // });


// const [productDetail, setProductDetail] = useState([])
  // const getProducts = ()=>{
  //   fetch(data)
  //   .then((res)=>res.json())
  //   .then(product => {
  //     console.log(product)
  //   })
  // }


  // useEffect(()=>{
  //     getProducts.then((response)=>{
  //      setProductDetail(response)
  //    })
  // },/*[]*/)







    



  