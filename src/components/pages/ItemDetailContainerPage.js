import { useParams } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/index.js";

const ItemDetailContainerPage = () => {
    const { id } = useParams();
    
    return (
        <div className="App">
            <h1>Item Detail Page</h1>
            <ItemDetailContainer index={id}/>
        </div>
    );
}

export default ItemDetailContainerPage;