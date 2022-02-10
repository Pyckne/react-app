import {useNavigate} from 'react-router-dom';
import { useContext, useState } from 'react';
import {CartContext} from '../../context/CartContext';
import {getFirestore} from '../../firebase/index';
import {validateEmail, validateName, validateLastName, validatePhone, initialState} from '../../components/ValidateForm/index';

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
            alert(res.id);
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

    return (
        <div className="Checkout-container">
            <div className="Checkout-header">
                <h1>Checkout</h1>
                <p>Formulario de finalización de compra</p>
                    <div className="Checkout-form-container">
                        <form id="formCheckout" className="Checkout-form" onSubmit={handleSubmit} onChange={handleChange}>
                            <div className="Checkout-form-group">
                                <label htmlFor="name">Nombre</label>
                                <input type="text" id="name" name="name" placeholder="Nombre" required/>
                                <label htmlFor="lastname">Apellido</label>
                                <input type="text" id="lastname" name="lastname" placeholder="Apellido" required/>
                                <label htmlFor="email1">Email</label>
                                <input type="email" id="email1" name="email1" placeholder="Email" required/>
                                <label htmlFor="email2">Confirmar Email</label>
                                <input type="email" id="email2" name="email2" placeholder="Confirmar Email" required/>
                                <label htmlFor="phone">Teléfono</label>
                                <input type="tel" id="phone" name="phone" placeholder="Teléfono" required/>
                                <div className="Checkout-form">
                                    <button onClick={() => navigate('/cart')}>Volver al carrito</button>
                                    <button type="submit">Finalizar compra</button>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    );
}

export default Checkout;