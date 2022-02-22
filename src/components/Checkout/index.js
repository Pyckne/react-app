import {useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import {CartContext} from '../../context/CartContext';
import {getFirestore} from '../../firebase/index';
import {validateEmail, validateName, validateLastName, validatePhone, initialState} from '../../components/ValidateForm/index';
import Swal from 'sweetalert2';

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
            /* alert(`Tu pedido ha sido registrado con el ID: ${res.id} \n Este es el detalle de su compra: ${cart.map(item => `\n Producto: ${item.name} - Cantidad: ${item.quantity}`)}`); */
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
        });
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
                <p>Formulario de finalización de compra</p>
                    <div className="Checkout-form-container">
                        <form id="formCheckout" className="Checkout-form" onSubmit={handleSubmit} onChange={handleChange}>
                            <div className="Checkout-form-group">
                                <div className="Checkout-form-name">
                                    <label htmlFor="name">Nombre: </label>
                                    <input type="text" id="name" name="name" placeholder="Nombre" required/>
                                    <div className="Checkout-form-invalid-name">
                                        {validateName(buyer.name) ? null : 'El nombre es requerido'}
                                    </div>
                                </div>
                                <div className="Checkout-form-lastname">
                                    <label htmlFor="lastname">Apellido: </label>
                                    <input type="text" id="lastname" name="lastname" placeholder="Apellido" required/>
                                    <div className="Checkout-form-invalid-lastname">
                                        {validateLastName(buyer.lastname) ? null : 'El apellido es requerido'}
                                    </div>
                                </div>
                                <div className="Checkout-form-email">
                                    <label htmlFor="email">Email: </label>
                                    <input type="email" id="email" name="email" placeholder="Email" required/>
                                    <div className="Checkout-form-invalid-email">
                                        {validateEmail(buyer.email) ? null : <p>Email inválido</p>}
                                    </div>
                                </div>
                                <div className="Checkout-form-email2">
                                    <label htmlFor="email2">Confirmar Email: </label>
                                    <input type="email" id="email2" name="email2" placeholder="Confirmar Email" required/>
                                    <div className="Checkout-form-invalid-email2">
                                        {buyer.email === buyer.email2 ? null : <p>Los emails no coinciden</p>}
                                    </div>
                                </div>
                                <div className="Checkout-form-phone">
                                    <label htmlFor="phone">Teléfono: </label>
                                    <input type="tel" id="phone" name="phone" placeholder="Teléfono" required/>
                                    <div className="Checkout-form-invalid-phone">
                                        {validatePhone(buyer.phone) ? null : <p>El Teléfono debe contener 10 dígitos</p>}
                                    </div>
                                </div>
                                <div className="Checkout-form">
                                    <button onClick={() => navigate('/cart')}>Volver al carrito</button>
                                    {validateForm() ? <button type="submit">Finalizar compra</button> : <button type="submit" disabled>Finalizar compra</button>}
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    );
}

export default Checkout;