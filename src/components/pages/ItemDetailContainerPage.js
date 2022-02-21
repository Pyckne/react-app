import { useParams } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/index.js";

const ItemDetailContainerPage = () => {
    const { id } = useParams();
    
    return (
        <div className="App">
            <ItemDetailContainer index={id}/>
        </div>
    );
}

export default ItemDetailContainerPage;