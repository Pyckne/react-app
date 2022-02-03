import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from '../../context/CartContext';

const Checkout = () => {
    const {clearCart} = useContext(CartContext);
    const navigate = useNavigate();
    const resetPage = () => {
        alert('Compra finalizada');
        clearCart();
        navigate('/');
    }

    return (
        <div className="Checkout-container">
            <div className="Checkout-header">
                <h1>Checkout</h1>
                <p>Formulario de finalización de compra</p>
            </div>
            <div className="Checkout-form">
                <button onClick={() => navigate('/cart')}>Volver al carrito</button>
                <button onClick={() => resetPage()}>Finalizar compra</button>
            </div>
        </div>
    );
}

export default Checkout;