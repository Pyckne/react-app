import { useEffect, useState } from 'react';
import { ITEMS } from '../ItemList/items.js';
import ItemDetail from '../ItemDetail/index.js';

function ItemDetailContainer () {
    const [item, setItem] = useState([]);
    useEffect(() => {
        const getProduct = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(ITEMS[1]), 2000);
            });
        };

        async function fetchProduct() {
            try {
                const item = await getProduct();
                setItem(item);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, []);


    return (
        <>
        { <ItemDetail {...item} /> }
        </>
      );
}

export default ItemDetailContainer;