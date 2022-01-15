import './style.css'
import ItemCount from "../ItemCount";

export default function CartWidget(props) {

    return (
        <>
            <h1>¿Entendí la Consigna?</h1>
            <p>{props.greeting}</p>
            <div className="ItemListContainer-container">
                <ItemCount name="Objeto Random" price="200"/>
                <ItemCount name="Objeto Random" price="200"/>
            </div>
        </>
      );
    }