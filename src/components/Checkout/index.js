import './style.css';
import {useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import {CartContext} from '../../context/CartContext';
import {getFirestore} from '../../firebase/index';
import {validateEmail, validateName, validateLastName, validatePhone, initialState} from '../../components/ValidateForm/index';
import Swal from 'sweetalert2';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Checkout = () => {
    const [buyer, setBuyer] = useState(initialState);
    const {cart, clearCart, totalItems, total} = useContext(CartContext);
    const navigate = useNavigate();
    const ddbb = getFirestore();
    const ordersCollection = ddbb.collection('orders');
    const itemsCollection = ddbb.collection('items');
    const formCarrito = document.getElementById('formCheckout');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm() === true && cart.length > 0) {
        const orderDetails = cart.map (item => `ID: ${item.id} - Producto: ${item.name} - Cantidad: ${item.quantity}`);
        const date = new Date();
        const order = {
            date: date.toLocaleDateString(),
            total: total,
            totalItems: totalItems,
            details: orderDetails,
            buyer: buyer
        };

    ordersCollection.add(order)
        .then((res) => {
            Swal.fire({
                title: 'Pedido confirmado',
                html: `<h2>${buyer.name}</h2>
                <p>Enviamos un email a la casilla: <b>${buyer.email}</b> con los pasos para realizar el pago.</p>
                <p>Tu pedido ha sido registrado con el ID: <b>${res.id}</b></p>`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#2e2d2d',
                background: '#7a7b78',
                color: '#000',
            });
            setBuyer(initialState);
            updateStock();
            formCarrito.reset();
        })
        .catch(err => console.log(err))
        .finally(() => {
            clearCart();
            navigate('/');
        
            })
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, verifica los campos del formulario o que su carrito no este vacío.',
                icon: 'error',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#2e2d2d',
                background: '#7a7b78',
                color: '#000',
            });
        }
    };

    const updateStock = () => {
        cart.forEach(item => {
            itemsCollection.doc(item.id).update({
                stock: item.stock - item.quantity
            });
        });
    };

    const handleChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        if (validateName(buyer.name) && validateLastName(buyer.lastname) && validatePhone(buyer.phone) && validateEmail(buyer.email) && buyer.email === buyer.email2) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="Checkout-container">
            <div className="Checkout-header">
                <h1>Checkout</h1>
                <p>Formulario de finalización de compra:</p>
            </div>
            <div className="Checkout-body">
                <form id="formCheckout" className="Checkout-form" onSubmit={handleSubmit} onChange={handleChange}>
                    <div className="Checkout-form-group">
                        <div className="Checkout-form-name">
                            <label htmlFor="name" className="Checkout-lebel">Nombre: </label>
                            <div className="Checkout-form-input-group">
                                <input className={validateName(buyer.name) ? "Checkout-input valid" : "Checkout-input invalid"} type="text" id="name" name="name" placeholder="Nombre" required/>
                                {validateName(buyer.name) ? <CheckCircleOutlineIcon className="Checkout-icon-valid" /> : <ErrorOutlineIcon className="Checkout-icon-invalid" />}
                            </div>
                            {validateName(buyer.name) ? null : 
                                <p className="Checkout-form-invalid">El nombre es requerido</p>
                            }
                        </div>
                        <div className="Checkout-form-lastname">
                            <label htmlFor="lastname" className="Checkout-lebel">Apellido: </label>
                            <div className="Checkout-form-input-group">
                                <input className={validateLastName(buyer.lastname) ? "Checkout-input valid" : "Checkout-input invalid"} type="text" id="lastname" name="lastname" placeholder="Apellido" required/>
                                {validateLastName(buyer.lastname) ? <CheckCircleOutlineIcon className="Checkout-icon-valid" /> : <ErrorOutlineIcon className="Checkout-icon-invalid" />}
                            </div>
                            {validateLastName(buyer.lastname) ? null : 
                                <p className="Checkout-form-invalid">El apellido es requerido</p>
                            }  
                        </div>
                        <div className="Checkout-form-email">
                            <label htmlFor="email" className="Checkout-lebel">Email: </label>
                            <div className="Checkout-form-input-group">
                                <input className={validateEmail(buyer.email) ? "Checkout-input valid" : "Checkout-input invalid"} type="email" id="email" name="email" placeholder="Email" required/>
                                {validateEmail(buyer.email) ? <CheckCircleOutlineIcon className="Checkout-icon-valid" /> : <ErrorOutlineIcon className="Checkout-icon-invalid" />}
                            </div>
                            {validateEmail(buyer.email) ? null : 
                                <p className="Checkout-form-invalid">Ingresa un email válido</p>
                            }
                        </div>
                        <div className="Checkout-form-email2">
                            <label htmlFor="email2" className="Checkout-lebel">Confirmar Email: </label>
                            <div className="Checkout-form-input-group">
                                <input className={buyer.email === buyer.email2 && validateEmail(buyer.email) ? "Checkout-input valid" : "Checkout-input invalid"} type="email" id="email2" name="email2" placeholder="Confirmar Email" required/>
                                {buyer.email === buyer.email2 && validateEmail(buyer.email) ? <CheckCircleOutlineIcon className="Checkout-icon-valid" /> : <ErrorOutlineIcon className="Checkout-icon-invalid" />}
                            </div>
                            {buyer.email === buyer.email2 && validateEmail(buyer.email) ? null : 
                                <p className="Checkout-form-invalid">Los emails deben coincidir</p>
                            }
                        </div>
                        <div className="Checkout-form-phone">
                            <label htmlFor="phone" className="Checkout-lebel">Teléfono: </label>
                            <div className="Checkout-form-input-group">
                                <input className={validatePhone(buyer.phone) ? "Checkout-input valid" : "Checkout-input invalid"} type="tel" id="phone" name="phone" placeholder="Teléfono" required/>
                                {validatePhone(buyer.phone) ? <CheckCircleOutlineIcon className="Checkout-icon-valid" /> : <ErrorOutlineIcon className="Checkout-icon-invalid" />}
                            </div>
                            {validatePhone(buyer.phone) ? null :      
                                <p className="Checkout-form-invalid">El Teléfono debe contener 10 dígitos</p>
                            }
                        </div>
                    </div>
                    <div className="Checkout-form-submit">
                        <button className="Checkout-form-btn Checkout-cart-btn" onClick={() => navigate('/cart')}>Volver al carrito</button>
                        {validateForm() ? <button type="submit" className="Checkout-form-btn enabled">Finalizar compra</button> : <button type="submit" className="Checkout-form-btn disabled" disabled>Finalizar compra</button>}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Checkout;