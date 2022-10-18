import { useEffect, useState } from "react"
import ItemList from "../../componentes/ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query, where} from 'firebase/firestore';

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    const {marca} = useParams();

    const db = getFirestore()
    const querySnapshot = collection(db, 'products')

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


    useEffect(()=>{
        getProducts.then((response)=>{
            setProductList(response)
        })
        console.log(getProducts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [marca])

    
    return (
        <>
            <ItemList lista={productList}/>
        </>
    )
}

export default ItemListContainer;