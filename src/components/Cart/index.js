import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import {CartContext} from '../../context/CartContext';


const Cart = () => {

    const { cart, removeItem, total, totalItems, clearCart} = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <>{totalItems > 0 ?
        <>
        <div className="Cart">
            <div className="Cart-items">
                {cart.map(item => (
                    <div key={item.id} className="Cart-item">
                        <div className="Cart-item-title">
                            {item.tittle}
                        </div>
                        <div className="Cart-item-quantity">
                            {item.quantityToAdd}
                        </div>
                        <div className="Cart-price">
                            {item.price}
                        </div>
                        <div className="Cart-remove">
                            <button onClick={() => removeItem(item.id)}>
                                Remover
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="Cart-total">
                Total: {total}
            </div>
            <div className="Cart-total-items">
                Total Items: {totalItems}
            </div>
            <div className="Cart-clear">
                <button onClick={clearCart}>
                    Limpiar carrito
                </button>
            </div>
            <div className="Cart-checkout">
                <button>
                    Checkout
                </button>
            </div>
            <div className="Cart-Home">
                <button onClick={() => navigate('/')}>
                    Continura Comprando
                </button>
            </div>
        </div>
        </>
        :
        <>
        <div className="Cart-empty">
            Carrito vacio
        </div>
        <div className="ItemCount-container">
            <div className="ItemCount-buttons">
                <button onClick={() => navigate('/')} className="ItemCount-action-buttons">Continuar comprando</button>
            </div>
        </div>
        </>
            }
        </>
    );
};

export default Cart;