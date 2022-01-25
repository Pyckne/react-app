import {useParams} from 'react-router-dom';
import ItemListCategory from "../ItemListCategory"

const CategoryPage = () => {

const { id } = useParams();
if (id === "1") {
    return (
        <div className="App">
            <h1>Accesorios</h1>
            <ItemListCategory categoryId={id}/>
        </div>
    );
} else if (id === "2") {
    return (
        <div className="App">
            <h1>Muebles</h1>
            <ItemListCategory categoryId={id}/>
        </div>
    );
}
};

export default CategoryPage;