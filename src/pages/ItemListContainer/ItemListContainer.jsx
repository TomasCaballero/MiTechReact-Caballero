import { useEffect, useState } from "react"
import ItemList from "../../componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore';










const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    const {marca} = useParams();

    const db = getFirestore()
    const querySnapshot = collection(db, 'products')

    

    useEffect(()=>{
        const getProducts = new Promise((resolve, reject)=>{
            if(marca){
                const queryFilter = query(querySnapshot, where('marca', '==', marca));
                getDocs(queryFilter).then((response)=>{
                    const data = response.docs.map((doc)=>{
                        return {id: doc.id, ...doc.data()}
                    })
                    resolve(data)
                })
            }else{
                getDocs(querySnapshot).then((response)=>{
                    const data = response.docs.map((doc)=>{
                        return {id: doc.id, ...doc.data()}
                    })
                    resolve(data)
                })
            }
        })


        getProducts.then((response)=>{
            setProductList(response)
        })
        console.log(getProducts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) //si dejo el productlist se me produce un ciclo infinito, si no lo pongo no filtra sin recargar la pagina

    
    return (
        <>
            <ItemList lista={productList}/>
        </>
    )
}

export default ItemListContainer;






//_-------------------------------------------------------------
// useEffect(()=>{
//     const getProducts = new Promise((resolve, reject)=>{
//         const db = getFirestore ()
//         const querySnapshot = collection(db, 'products')
        
//         if(marca){
//             const queryFilter = query(querySnapshot, where('marca', '==', marca));
//             getDocs(queryFilter).then((response)=>{
//                 const data = response.docs.map((doc)=>{
//                     return {id: doc.id, ...doc.data()}
//                 })
//                 setProductList(data)
//                 console.log(data)
//             })
//         }else{
//             getDocs(querySnapshot).then((response)=>{
//                 const data = response.docs.map((doc)=>{
//                     return {id: doc.id, ...doc.data()}
//                 })
//                 setProductList(data)
//                 console.log(data)
//             })
//         }
//     })
    
//     if(marca === undefined){
//         getProducts.then((response)=>{
//         setProductList(response)
//     })}else{
//         getProducts
//         .then((res)=>{
//             const filterData = res.filter(product => product.marca === marca)
//             setProductList(filterData)
//         })
//     }
//     console.log(getProducts)
// // eslint-disable-next-line react-hooks/exhaustive-deps
// },[])


//-------------------------------------------

// const getProducts = ()=>{
//     const db = getFirestore ()
//     const querySnapshot = collection(db, 'products')

//     if(marca){
//         const queryFilter = query(querySnapshot, where('marca', '==', marca));
//         getDocs(queryFilter).then((response)=>{
//             const data = response.docs.map((doc)=>{
//                 return {id: doc.id, ...doc.data()}
//             })
//             setProductList(data)
//             console.log(data)
//         })
//     }else{
//         getDocs(querySnapshot).then((response)=>{
//             const data = response.docs.map((doc)=>{
//                 return {id: doc.id, ...doc.data()}
//             })
//             setProductList(data)
//             console.log(data)
//         })
//     }
// }

// useEffect(()=>{
//     getProducts()
// }, [])


//-----------------------------------------

// const db = getFirestore ()
// const querySnapshot = collection(db, 'products')

// const getProducts = (res)=>{    
//     if(marca){
//         const queryFilter = query(querySnapshot, where('marca', '==', marca));
//         getDocs(queryFilter).then((response)=>{
//             const data = response.docs.map((doc)=>{
//                 return {id: doc.id, ...doc.data()}
//             })
//             setProductList(data)
//             console.log(data)
//         })
//     }else{
//         getDocs(querySnapshot).then((response)=>{
//             const data = response.docs.map((doc)=>{
//                 return {id: doc.id, ...doc.data()}
//             })
//             setProductList(data)
//             console.log(data)
//         })
//     }
//     console.log(res)
// }

// useEffect(()=>{
//     getProducts()
// }, [])


//-----------------------
// const getProducts = ()=>{
//     getDocs(querySnapshot).then((response)=>{
//         const data = response.docs.map((doc)=>{
//             return {id: doc.id, ...doc.data()}
//         })
//         setProductList(data)
//         console.log(data)
//     })
// }

// const getProductsFilter = ()=>{
//     const queryFilter = query(querySnapshot, where('marca', '==', marca));
//     getDocs(queryFilter).then((response)=>{
//         const data = response.docs.map((doc)=>{
//             return {id: doc.id, ...doc.data()}
//         })
//         setProductList(data)
//         console.log(data)
//     })
// }

// useEffect(()=>{
//     if(marca){
//         getProductsFilter()
//     }else{
//         getProducts()
//     }
// }, [])


//-------
// const getProducts = new Promise((resolve, reject)=>{
//     getDocs(querySnapshot).then((response)=>{
//         const data = response.docs.map((doc)=>{
//             return {id: doc.id, ...doc.data()}
//         })
//         resolve(data)
//     })
// })

// const getProductsFilter = new Promise((resolve, reject)=>{
//     const queryFilter = query(querySnapshot, where('marca', '==', marca));
//     getDocs(queryFilter).then((response)=>{
//         const data = response.docs.map((doc)=>{
//             return {id: doc.id, ...doc.data()}
//         })
//         resolve(data)
//     })
// }) 

// useEffect(()=>{
//     if(marca){
//         getProductsFilter.then((res)=>{
//             setProductList(res)
//         })
//     }else{
//         getProducts.then((res)=>{
//             setProductList(res)
//         })
//     }
// }, [])


//----------------------------------------

// const getProducts = new Promise((resolve, reject)=>{
//     if(marca){
//         const queryFilter = query(querySnapshot, where('marca', '==', marca));
//         getDocs(queryFilter).then((response)=>{
//             const data = response.docs.map((doc)=>{
//                 return {id: doc.id, ...doc.data()}
//             })
//             resolve(data)
//         })
//     }else{
//         getDocs(querySnapshot).then((response)=>{
//             const data = response.docs.map((doc)=>{
//                 return {id: doc.id, ...doc.data()}
//             })
//             resolve(data)
//         })
//     }
// })

// useEffect(()=>{
//     getProducts.then((response)=>{
//         setProductList(response)
//     })
//     console.log(getProducts)
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []) //si dejo el productlist se me produce un ciclo infinito, si no lo pongo no filtra sin recargar la pagina