import './style.css';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Cart = () => {
    const { cart, removeItem, total, totalItems, clearCart} = useContext(CartContext);
    const navigate = useNavigate();
    return (
        <>{totalItems > 0 ?
        <>
            <div className="Cart-header">
                <h1>Carrito</h1>
            </div>
            <div className="Cart-container">
                <div className="Cart-items">
                    <table className="Cart-table">
                        <thead className="Cart-table-header">
                            <tr>
                                <th>Foto</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th>Remover</th>
                            </tr>
                        </thead>
                        <tbody className="Cart-table-body">
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td><img className="Cart-item-image" src={item.img} alt={item.tittle} /></td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price * item.quantity}</td>
                                <td><button className="Cart-item-remove" onClick={() => removeItem(item.id)}><DeleteForeverIcon /></button></td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot className="Cart-table-footer">
                            <tr>
                                <td colSpan="4" className="Cart-table-footer-back-to-home">
                                    <button className="Cart-table-footer-back-to-home-button" onClick={()=> navigate('/react-app')}>Continuar comprando</button> 
                                </td>
                                <td colSpan="1" className="Cart-table-footer-empty-cart">
                                    <button className="Cart-table-footer-empty-cart-button" onClick={()=> clearCart()}>Vaciar carrito</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="Cart-total">
                    <div className="Cart-total-header">
                        <h2>Resumen de Compra</h2>
                    </div>
                    <hr/>
                    <div className="Cart-total-body">
                            <h3>Cantidad total:</h3>
                            <p>{totalItems}</p>
                            <h3>Total a pagar:</h3>
                            <p>$ {total}</p>
                    </div>
                    <hr/>
                    <div className="Cart-total-footer">
                        <button className="Cart-total-footer-checkout" onClick={() => navigate('/react-app/checkout')}>Finalizar compra</button>
                    </div>
                </div>
            </div>
        </>
        :
        <>
        <div className="Cart-empty-container">
            <div className="Cart-empty-header">
                <h1>¡Su carrito se encuentra vacio!</h1>
            </div>
            <div className="Cart-empty-body">
                <button className="Cart-empty-button" onClick={() => navigate('/react-app')}>Ir a la tienda</button>
            </div>
        </div>
        </>
        }</>
    );
};

export default Cart;