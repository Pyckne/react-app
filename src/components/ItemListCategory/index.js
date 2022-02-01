import {useEffect, useState} from 'react';
import { ITEMS } from '../ItemList/items.js';
import {useParams} from 'react-router-dom';
import Item from '../Item/index.js';

const ItemListCategory = () => {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getItems = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(ITEMS.filter(item => item.categoryId === id)), 2000);
            });
        };

        async function fetchItems() {
            try {
                const items = await getItems();
                setItems(items);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(true);
                setLoading(false);
            }
        }

        fetchItems();

        return () => {
            setItems([]);
            setLoading(true);
            setError(false);
        };
    }, [id]);

    return (
        <div className="ItemListContainer-container">
            { loading ? <h1>Loading...</h1> : null }
            { error ? <h1>Error</h1> : null }
            { items.map(item => <Item key={item.id} {...item} />) }
        </div>
    );
}

export default ItemListCategory;