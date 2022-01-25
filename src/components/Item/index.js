import './style.css';
import {useNavigate} from 'react-router-dom';

function Item (item) {
  const navigate = useNavigate();

  return (
    <div className="Item-container"> 
        <img className="Item-img" src={item.pictureUrl} alt=""/>
        <h3 className="Item-tittle">{item.tittle}</h3>
        <p className="Item-price">Precio: ${item.price}</p>
        <button onClick={() => navigate(`/item/${item.id}`)} className="Item-detail">Detalle del producto</button>
        <hr/>
        <span className="Item-stock">Stock: {item.stock}</span>
    </div>
    
  );
}

export default Item;