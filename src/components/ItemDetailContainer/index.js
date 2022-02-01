import { useEffect, useState } from 'react';
import { ITEMS } from '../ItemList/items.js';
import ItemDetail from '../ItemDetail/index.js';

function ItemDetailContainer (i) {
    const [item, setItem] = useState([]);
    const id = Number(i.index);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getProduct = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(ITEMS[id]), 1500);
            });
        };

        async function fetchProduct() {
            try {
                const item = await getProduct();
                setItem(item);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(true);
            }
        }
        fetchProduct();
    }, [id]);


    return (
        <>
            { loading ? <h1>Loading...</h1> : null }
            { error ? <h1>Error</h1> : null }
            { <ItemDetail {...item} /> }
        </>
      );
}

export default ItemDetailContainer;