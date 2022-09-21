import { useState } from "react";
import { CartContext } from "./cartContext";
import Swal from 'sweetalert2'

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (item, cantidad)=>{
        if (isInCart(item.id)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este producto ya esta en el carrito',
            })
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Se agrego el producto correctamente',
            })
            setCart([...cart,{...item, cantidad }])
        }
        console.log('cart', [...cart,{...item, cantidad}])
    };

    const isInCart = (id) =>{
        return cart.some((item)=> item.id === id)
    };

    const clear = ()=>{
        setCart([]);
    }

    const removeItem = ()=>{
        
    }

    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}