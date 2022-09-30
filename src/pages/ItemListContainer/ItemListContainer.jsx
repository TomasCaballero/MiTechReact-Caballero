import { useEffect, useState } from "react"
import ItemList from "../../componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    const {marca} = useParams();

    useEffect(()=>{
        const getProducts = new Promise((resolve, reject)=>{
            const db = getFirestore ()
            const querySnapshot = collection(db, 'product')
            
            if(marca){
                const queryFilter = query(querySnapshot, where('marca', '==', marca));
                getDocs(queryFilter).then((response)=>{
                    const data = response.docs.map((doc)=>{
                        return {id: doc.id, ...doc.data()}
                    })
                    setProductList(data)
                })
            }else{
                getDocs(querySnapshot).then((response)=>{
                    const data = response.docs.map((doc)=>{
                        return {id: doc.id, ...doc.data()}
                    })
                    setProductList(data)
                })
            }
        })
        
        if(marca === undefined){
            getProducts.then((response)=>{
            setProductList(response)
        })}else{
            getProducts
            .then((res)=>{
                const filterData = res.filter(product => product.marca === marca)
                setProductList(filterData)
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productList])
    

    return (
        <>
            <ItemList lista={productList}/>
        </>
    )
}

export default ItemListContainer;



// useEffect(()=>{
    //     const getProducts = new Promise((resolve, reject)=>{
    //         setTimeout(()=>{
    //             resolve(data);
    //         }, 2000);
    //     });
        
    //     if(marca === undefined){
    //     getProducts.then((response)=>{
    //         setProductList(response)
    //     })}else{
    //         getProducts
    //         .then((res)=>{
    //             const filterData = res.filter(item => item.marca === marca)
    //             setProductList(filterData)
    //         })
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[productList])





    //_------------------------------------------------------------
    /* useEffect(()=>{
        const getProducts = new Promise((resolve, reject)=>{
            const db = getFirestore ()
            const querySnapshot = collection(db, 'product')
            const queryFilter = query(querySnapshot, where('marca', '==', marca));
            if(marca){
                getDocs(queryFilter).then((response)=>{
                    const data = response.docs.map((doc)=>{
                        return {id: doc.id, ...doc.data()}
                    })
                    setProductList(data)
                })
            }else{
                getDocs(querySnapshot).then((response)=>{
                    const data = response.docs.map((doc)=>{
                        return {id: doc.id, ...doc.data()}
                    })
                    setProductList(data)
                })
            }
        })
        
        // if(marca === undefined){
        //     getProducts.then((response)=>{
        //     setProductList(response)
        // })}else{
        //     getProducts
        //     .then((res)=>{
        //         const filterData = res.filter(product => product.marca === marca)
        //         setProductList(filterData)
        //     })
        // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[productList])*/



    //----------------------------------
    // const getProducts = ()=>{
    //     const db = getFirestore();
    //     const querySnapshot = collection(db, 'product');
    //     if(marca === undefined){
            // getDocs(querySnapshot).then((response)=>{
            //     const data = response.docs.map((doc)=>{
            //         return {id: doc.id, ...doc.data()}
            //     })
            //     setProductList(data)
    //         })
    //     }else{
    //         const queryFilter = query(querySnapshot, where('marca', '==', marca));
    //         getDocs(queryFilter).then((response)=>{
    //             const data = response.docs.map((doc)=>{
    //                 return {id: doc.id, ...doc.data()}
    //             })
    //             setProductList(data)
    //         })
    //     }
    // }

    // useEffect(()=>{
    //     getProducts()
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])