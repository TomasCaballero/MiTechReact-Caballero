import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import './Cart.style.css'
import { collection, addDoc, getFirestore/*, doc, updateDoc*/ } from "firebase/firestore"
import moment from "moment/moment"
import Swal from 'sweetalert2'

const rutaInicial = '../img/'

const Cart = () => {
    const {cart, clear, removeItem} =useContext(CartContext)
    // eslint-disable-next-line no-unused-vars
    let [precioTotal, setPrecioTotal] = useState(0)
    const db = getFirestore()

    
    precioTotal = cart.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)

    const createOrder= ()=>{
        const order ={
            buyer: {
                name: 'Tomas',
                phone: 1120304982,
                email: 'tomastomas@tomas.com'
            },
            items: cart,
            total: precioTotal,
            date: moment().format()
        }
        const queryOrder = collection(db, 'order');
        addDoc(queryOrder, order)
        .then(({id})=>{
            console.log({id})
            Swal.fire({
                icon: 'success',
                title: 'El pago se realizo de manera exitosa',
            })
        })
        .catch(()=>{
            alert('Tu compra no puedo ser realizada')
        })
    }

    // const updateOrder = ()=>{
    //     const idOrder = 'XQR3ZpgcxzGSgYHZHrwc';
    //     const order = {
    //         buyer: {
    //             name: 'Tomas',
    //             phone: 1120304982,
    //             email: 'tomastomas@tomas.com'
    //         },
    //         items: cart.pop(),
    //         total: precioTotal,
    //     };
    //     const queryUpdate = doc(db, 'order', idOrder);
    //     updateDoc(queryUpdate, order)
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }



    return (
        <div className="contenidoCarrito">
            {cart.length === 0 ? 
            (
            <div className="carritoVacio">
                <h2>El carrito esta vacio</h2>
                <Link to={"/"} style={{ textDecoration: 'none'}}>
                    <button className='btn btn-dark pl-2 irAlCarrito'>Ver productos</button>
                </Link>
            </div>
            ) : (
            <div className="contendorCarrito">
                {cart.map((item)=>(
                    <div className="cart-detail" key={item.id}>
                        <div className='imgTitulo'>
                            <img src={rutaInicial + item.img} alt={item.articulo} width={'200px'}/>
                            <h5>{item.articulo}</h5>
                        </div>
                        <div className='divPrecio'>
                            <p><strong>uS${item.precio}</strong></p>
                        </div>
                        <div className="card-body cartBody">
                            <div className='divisorCart'>
                                <h5>Detalles:</h5>
                                <p>Bateria: {item.bateria}mAh</p>
                                <p>Almacenamiento: {item.memoria}GB</p>
                                <p>Memoria RAM: {item.ram}GB</p>
                            </div>
                        </div>
                        <div className="cantidad">
                            <h5 className="contenidoCantidad">Cantidad:</h5>
                            <h5 className="contenidoCantidad">{item.cantidad}</h5>
                        </div>
                        <div className="btnRemove">
                            <button className='btn btn-dark pl-2 irAlCarrito' onClick={()=> removeItem(item.id)}>Eliminar</button>
                        </div>
                    </div>
                ))}
                <div className="precioTotalPagar">
                    <div>Precio total: uS$<strong id="precioTotal">{precioTotal}</strong></div>
                    <button className='btn btn-dark pl-2 irAlCarrito' onClick={()=> createOrder()}>Pagar</button>
                    {/* <button className='btn btn-dark pl-2 irAlCarrito' onClick={()=> updateOrder()}>Editar orden</button> */}
                </div>
                <div className="btnVaciarCarrito">
                    <button className='btn btn-dark pl-2 irAlCarrito' onClick={()=> clear()}>Vaciar Carrito</button>
                </div>
            </div>)}
            
            
        </div>
    )
}

export default Cart;