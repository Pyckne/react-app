import './style.css';

function Item (item) {
  return (
    <div className="Item-container"> 
        <h3 className="Item-tittle">{item.tittle}</h3>
        <p className="Item-price">Precio: ${item.price}</p>
        <img className="Item-img" src={item.img} alt=""/>
    </div>
    
  );
}

export default Item;