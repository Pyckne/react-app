import './style.css';
import {useNavigate} from 'react-router-dom';

function Item (item) {
  const navigate = useNavigate();

  return (
    <div className="Item-container"> 
        <img className="Item-img" src={item.item.img} alt=""/>
        <h3 className="Item-tittle">{item.item.name}</h3>
        <p className="Item-price">Precio: ${item.item.price}</p>
        <button onClick={() => navigate(`/react-app/item/${item.item.id}`)} className="Item-detail">Detalle del producto</button>
        <hr/>
        <span className="Item-stock">Stock: {item.item.stock}</span>
    </div>
    
  );
}

export default Item;