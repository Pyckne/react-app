import './style.css'
/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList";

export default function ItemListContainer(props) {

    return (
        <>
            <h1>¿Entendí la Consigna?</h1>
            <p>{props.greeting}</p>
            <div className="ItemListContainer-container">
                {/* <ItemCount name="Objeto Random" price="200" stock={7}/> */}
                <ItemList />
            </div>
        </>
      );
    }