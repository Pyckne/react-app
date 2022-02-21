import './style.css'
/* import ItemCount from "../ItemCount"; */
import ItemList from "../ItemList";

export default function ItemListContainer(props) {

    return (
        <>
            <h1 className="ItemListContainer-title">Bienvenido</h1>
            <p className="ItemListContainer-greeting">{props.greeting}</p>
            <div className="ItemListContainer-container">
                <ItemList />
            </div>
        </>
      );
    }