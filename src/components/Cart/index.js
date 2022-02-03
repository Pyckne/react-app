import './style.css';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';


const Cart = () => {

    const { cart, removeItem, total, totalItems, clearCart} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <>{totalItems > 0 ?
        <>
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
                                <td><img className="Cart-item-image" src={item.pictureUrl} alt={item.tittle} /></td>
                                <td>{item.tittle}</td>
                                <td>{item.quantityToAdd}</td>
                                <td>${item.price * item.quantityToAdd}</td>
                                <td><button onClick={() => removeItem(item.id)}>X</button></td>
                            </tr>
                        ))}
                        </tbody>
                        <tfoot className="Cart-table-footer">
                            <tr>
                                <td colspan="4" className="Cart-table-footer-back-to-home">
                                    <button onClick={()=> navigate('/')}>Continuar comprando</button> 
                                </td>
                                <td colspan="1" className="Cart-table-footer-empty-cart">
                                    <button onClick={()=> clearCart()}>Vaciar carrito</button>
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
                        <button onClick={() => navigate('/checkout')}>Comprar</button>
                    </div>
                </div>
            </div>
        </>
        :
        <>
        <div className="Cart-empty-container">
            <div className="Cart-empty-header">
                <h1>Carrito vacio</h1>
            </div>
            <div className="Cart-empty-body">
                    <button onClick={() => navigate('/')}>Continuar comprando</button>
            </div>
        </div>
        </>
            }
        </>
    );
};

export default Cart;