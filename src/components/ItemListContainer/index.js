import './style.css'
/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList";

export default function ItemListContainer(props) {

    return (
        <>
            <h1>Bienvenido</h1>
            <p>{props.greeting}</p>
            <div className="ItemListContainer-container">
                <ItemList />
            </div>
        </>
      );
    }