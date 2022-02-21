import './style.css';
import {useNavigate} from 'react-router-dom';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function ItemCount(item) {
    const navigate = useNavigate();
    return (
        <>
            { !item.changeButton ?
            <div className="ItemCount-container">
                <div className="ItemCount-item"> 
                    <h2>Precio Total: ${item.totalPrice}</h2>
                    <div className="ItemCount-buttons">
                        <ButtonGroup>
                            <Button
                                onClick={item.decreaseQuantity}>{" "}
                                <RemoveIcon fontSize="small" />
                            </Button>
                        </ButtonGroup>
                        <span>{item.quantityToAdd}</span>
                        <ButtonGroup>
                            <Button
                                onClick={item.increaseQuantity}>{" "}
                            <AddIcon fontSize="small" />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <h3 className="ItemDetail-stock-tittle">Stock disponible:</h3>
                    <span className="ItemDetail-stock">({item.stock} disponibles)</span>
                    <button onClick={item.onAdd} className="ItemCount-add-button">Agregar al carrito</button>
                </div>
            </div>
                :
                <div className="ItemCount-container">
                    <div className="ItemCount-buttons-group">
                        <button onClick={() => navigate('/')} className="ItemCount-action-button-shop">Continuar comprando</button>
                        <button onClick={() => navigate('/cart')} className="ItemCount-action-button-cart">Ir al carrito</button>
                    </div>
                </div>
            }
        </>
      );
    }