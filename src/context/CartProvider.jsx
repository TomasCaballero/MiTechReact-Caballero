import { useState } from "react";
import { CartContext } from "./cartContext";
import Swal from 'sweetalert2'

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const cartLength = parseInt(cart.length);
    
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
        console.log('cart', [...cart,{...item, cantidad}], cartLength)
    };

    const isInCart = (id) =>{
        return cart.some((item)=> item.id === id)
    };

    const pagoExitoso = () => {
        Swal.fire({
            icon: 'success',
            title: 'El pago se realizo de manera exitosa',
        })
        setCart([]);
    }

    const clear = ()=>{
        setCart([]);
    }

    
    const removeItem = (productId) => {
        // eslint-disable-next-line no-unused-vars
        let index = cart.findIndex(item => item.id === productId);
        let nuevoArreglo = []
        cart.forEach((product) => {
            if(product.id === productId){
                console.log(product);
            }else{
                nuevoArreglo.push(product);
            }
        })
        setCart(nuevoArreglo);
    }


    return(
        <CartContext.Provider value={{cart, addToCart, clear, removeItem, cartLength, pagoExitoso, setCart}}>
            {children}
        </CartContext.Provider>
    )
}