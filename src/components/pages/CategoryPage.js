import {useParams} from 'react-router-dom';
import ItemListCategory from "../ItemListCategory"

const CategoryPage = () => {

const { id } = useParams();
if (id === "1") {
    return (
        <div className="App">
            <h1 className="ItemListContainer-title">Accesorios</h1>
            <br/>
            <br/>
            <ItemListCategory categoryId={id}/>
        </div>
    );
} else if (id === "2") {
    return (
        <div className="App">
            <h1 className="ItemListContainer-title">Muebles</h1>
            <br/>
            <br/>
            <ItemListCategory categoryId={id}/>
        </div>
    );
}
};

export default CategoryPage;