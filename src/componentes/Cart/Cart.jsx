import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext"
import './Cart.style.css'
import { collection, addDoc, getFirestore} from "firebase/firestore"
import moment from "moment/moment"
import Swal from 'sweetalert2'

const rutaInicial = '../img/'

const Cart = () => {
    const {cart, clear, removeItem} =useContext(CartContext)
    // eslint-disable-next-line no-unused-vars
    let [precioTotal, setPrecioTotal] = useState(0)
    const db = getFirestore()

    
    precioTotal = cart.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0)

    const [order, setOrder] = useState({
        buyer: {
            name: '',
            phone: 0,
            email: ''
        },
        items: cart,
        total: precioTotal,
        date: moment().format()
    })
    const createOrder= ()=>{
        const queryOrder = collection(db, 'order');
        addDoc(queryOrder, order)
        .then(({id})=>{
            console.log({id})
            Swal.fire({
                icon: 'success',
                title: 'El pago se realizo de manera exitosa',
                text: 'Su orden de compra es: ' + id
            })
        })
        .catch(()=>{
            alert('Tu compra no puedo ser realizada')
        })
    }

    const handleInputChange = (e) => {
        setOrder({
            ...order,
            buyer:{
                ...order.buyer,
                [e.target.name]: e.target.value
            }
        })
    }

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
                    <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Pagar
                    </button>

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Ingrese sus datos</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div className="inputOrder">
                                        <label htmlFor="name">Apellido y nombre:</label>
                                        <input type="text" name="name" id="name" value={order.buyer.name} onChange={handleInputChange}/>
                                    </div>
                                    <div className="inputOrder">
                                        <label htmlFor="phone">Teléfono:</label>
                                        <input type="number" name="phone" id="phone" value={order.buyer.phone} onChange={handleInputChange}/>
                                    </div>
                                    <div className="inputOrder">
                                        <label htmlFor="email">Correo:</label>
                                        <input type="email" name="email" id="email" value={order.buyer.email} onChange={handleInputChange}/>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button className='btn btn-dark pl-2 irAlCarrito' data-bs-dismiss="modal" onClick={()=> createOrder()}>Pagar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btnVaciarCarrito">
                    <button className='btn btn-dark pl-2 irAlCarrito' onClick={()=> clear()}>Vaciar Carrito</button>
                </div>
            </div>)}
            
            
        </div>
    )
}

export default Cart;