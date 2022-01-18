import './style.css'
/* import ItemCount from "../ItemCount"; */
import Item from "../Item";

export default function CartWidget(props) {

    return (
        <>
            <h1>¿Entendí la Consigna?</h1>
            <p>{props.greeting}</p>
            <div className="ItemListContainer-container">
                {/* <ItemCount name="Objeto Random" price="200" stock={7}/> */}
                <Item tittle="Reloj" price="2000" img="https://picsum.photos/200/300"/>
            </div>
        </>
      );
    }