import './style.css';

function Item (item) {
  return (
    <div className="Item-container"> 
        <img className="Item-img" src={item.pictureUrl} alt=""/>
        <h3 className="Item-tittle">{item.tittle}</h3>
        <p className="Item-price">Precio: ${item.price}</p>
        <button className="Item-detail">Detalle del producto</button>
        <hr/>
        <span className="Item-stock">Stock: {item.stock}</span>
    </div>
    
  );
}

export default Item;