import { useEffect, useState } from "react"
import ItemList from "../../componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection} from 'firebase/firestore';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    const {marca} = useParams();

    useEffect(()=>{
        const getProducts = new Promise((resolve, reject)=>{
            const db = getFirestore ()
            const querySnapshot = collection(db, 'product')
            getDocs(querySnapshot).then((response)=>{
                const data = response.docs.map((doc)=>{
                    return {id: doc.id, ...doc.data()}
                })
                setProductList(data)
            })
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