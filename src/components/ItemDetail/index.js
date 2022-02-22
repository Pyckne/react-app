import './style.css';
import Swal from 'sweetalert2';
import {useState} from 'react';
import ItemCount from '../ItemCount/';
import {useContext} from 'react';
import {CartContext} from '../../context/CartContext';

function ItemDetail (item) {
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const [changeButton, setChangeButton] = useState(false);
  const stockQuantity = item.item.stock;
  const totalPrice = item.item.price * quantityToAdd;

  const { addItem } = useContext(CartContext);

  const decreaseQuantity = () => {
    setQuantityToAdd((prevState) => (Math.max(prevState - 1, 1)));
  }

  const increaseQuantity = () => {
    setQuantityToAdd((prevState) => (Math.min(prevState + 1, stockQuantity)));
  }

  const onAdd = () => {
    Swal.fire({
      title: 'Producto agregado',
      text: `Usted a agregado ${quantityToAdd} ${item.item.name} al carrito`,
      icon: 'success',
      confirmButtonText: "Aceptar",
      confirmButtonColor: '#2e2d2d',
      background: '#7a7b78',
      color: '#000',
    })
    addItem(item.item, quantityToAdd);
    setChangeButton(true);
  };

  return (
    <>
      <div className="ItemDetail-title">
        <h1 className="ItemListContainer-title">Detalle del producto</h1>
      </div>
      <div className="ItemDetail-container">
        <div className="ItemDetail-img-container"> 
          <img className="ItemDetail-img" src={item.item.img} alt=""/>
        </div>
        <div className="ItemDetail-info-container">
          <h2 className="ItemDetail-tittle">{item.item.name}</h2>
          <p className="ItemDetail-price">Precio: ${item.item.price}</p>
          <p className="ItemDetail-description">{item.item.description}</p>
        </div>
        <div className="ItemDetail-actions-container">
          <ItemCount changeButton={changeButton} onAdd={onAdd} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} quantityToAdd={quantityToAdd} price={item.item.price} stock={item.item.stock} totalPrice={totalPrice}/>
        </div>
      </div>
    </>  
  );
  }
  
  export default ItemDetail;