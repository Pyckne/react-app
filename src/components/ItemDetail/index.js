import './style.css';
import {useState} from 'react';
import ItemCount from '../ItemCount/';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';

function ItemDetail (item) {
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const [changeButton, setChangeButton] = useState(false);
  const stockQuantity = item.stock;
  const totalPrice = item.price * quantityToAdd;

  const { addItem } = useContext(CartContext);

  const decreaseQuantity = () => {
    setQuantityToAdd((prevState) => (Math.max(prevState - 1, 1)));
  }

  const increaseQuantity = () => {
    setQuantityToAdd((prevState) => (Math.min(prevState + 1, stockQuantity)));
  }

  const onAdd = () => {
    alert(`Usted agrego ${quantityToAdd} items con un valor total de $${totalPrice}`);
    addItem(item, quantityToAdd);
    setChangeButton(true);
  };

  return (
    <div className="ItemDetail-container">
      <div className="ItemDetail-img-container"> 
        <img className="ItemDetail-img" src={item.pictureUrl} alt=""/>
      </div>
      <div className="ItemDetail-info-container">
        <h2 className="ItemDetail-tittle">{item.tittle}</h2>
        <p className="ItemDetail-price">Precio: ${item.price}</p>
        <p className="ItemDetail-description">{item.description}</p>
      </div>
      <div className="ItemDetail-actions-container">
        <ItemCount changeButton={changeButton} onAdd={onAdd} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} quantityToAdd={quantityToAdd} price={item.price} stock={item.stock} totalPrice={totalPrice}/>
      </div>
    </div>  
  );
  }
  
  export default ItemDetail;